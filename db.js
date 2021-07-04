const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PostManagerDB", { useNewUrlParser: true, useUnifiedTopology: true }, (err => {

    if (!err) console.log("Database connected successfully!");
    else console.log("Error connecting to database!", JSON.stringify(err, undefined, 2));

}))