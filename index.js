require("./db");

const express = require("express");
const bodyParser = require("body-parser");

const PostMessagesRouter = require("./controllers/postMessageController");

const app = express();

// middlewares

app.use(bodyParser.json());
var PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

app.use("/postMessage", PostMessagesRouter);
