const mongoose = require("mongoose");

const postMessage = mongoose.model(
  "postMessages",
  {
    title: { type: String },
    message: { type: String },
  },
  "postMessages",
);

module.exports = { postMessage };
