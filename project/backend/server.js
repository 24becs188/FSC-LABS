const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Build a Task App" }
];

// API to get tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// API to add task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };

  tasks.push(newTask);
  res.json(newTask);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});