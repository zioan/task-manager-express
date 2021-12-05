const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./db/connect");
require("dotenv").config();

const tasks = require("./routes/tasks");

//middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

//Wait for DB connection and then start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (err) {
    console.log(err);
  }
};

start();
