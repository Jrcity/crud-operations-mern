require("./db");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PostMessagesRouter = require("./controllers/postMessageController");
var PORT = process.env.PORT || 4000;

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

app.use("/postMessage", PostMessagesRouter);
