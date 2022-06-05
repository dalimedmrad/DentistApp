const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.DB, (err) => {
    if (err) throw err;
    console.log("DataBase is connected");
  });
};

module.exports = connectDB;
