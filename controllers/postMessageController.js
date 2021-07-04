const express = require("express");
const ObjectID = require("mongoose").Types.ObjectId;

const { postMessage } = require("../models/postMessage");

const Router = express.Router();

// get all posts
Router.get("/", (req, res) => {
  postMessage.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        `Error while getting records! \n Error: ${JSON.stringify(
          err,
          undefined,
          2,
        )}`,
      );
  });
});

//get specific post
Router.get("/:id", (req, res) => {
  let ID = req.params.id;
  if (!ObjectID.isValid(ID)) return res.status(400).send("Invalid Id");

  postMessage.findById(ID, (err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        `Error get post with this Id: ${ID} \n Error: ${JSON.stringify(
          err,
          undefined,
          2,
        )}`,
      );
  });
});

//new posts
Router.post("/", (req, res) => {
  let { title, message } = req.body;

  const newPost = new postMessage({
    title,
    message,
  });

  newPost.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        `Error while creating new post! \n Error: ${JSON.stringify(
          err,
          undefined,
          2,
        )}`,
      );
  });
});

//edit post
Router.put("/:id", (req, res) => {
  let ID = req.params.id;
  if (!ObjectID.isValid(ID)) return res.status(400).send("Invalid Id!");
  let { title, message } = req.body;

  const editedPost = {
    title,
    message,
  };
  postMessage.findByIdAndUpdate(
    ID,
    { $set: editedPost },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          `Error while updating post! \n Error: ${JSON.stringify(
            err,
            undefined,
            2,
          )}`,
        );
    },
  );
});

//removing a post
Router.delete("/:id", (req, res) => {
  let ID = req.params.id;
  if (!ObjectID.isValid(ID)) return res.status(400).send("Invalid Id!");
  postMessage.findByIdAndRemove(ID, (err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        `Error while removing post! \n Error: ${JSON.stringify(
          err,
          undefined,
          2,
        )}`,
      );
  });
});

module.exports = Router;
