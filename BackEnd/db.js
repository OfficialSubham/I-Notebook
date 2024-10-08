const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/inotebookdb";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      // throw new Error("just checking")
      console.log("connected to mongo successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectToMongo;
