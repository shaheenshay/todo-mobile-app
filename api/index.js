const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const cors = require("cors");
const Todo = require("./models/todo");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://shaheenshay:shay1234@cluster0.qmmuupf.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB", error);
  });

app.listen(port, () => {
  console.log("Server running on port 3000");
});

const Todo = require("./models/todo");
app.post("/todo", async (req, res) => {
  try {
    const { title, color, repeatMode, reminder } = req.body;

    const newTodo = new Todo({
      title,
      color,
      repeatMode,
      reminder,
    });

    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: "Network error" });
  }
});
