const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

//for mongoose v6 and up
// const connectDB = (url) => {
//   return mongoose.connect(connectionString)
// }

module.exports = connectDB;
