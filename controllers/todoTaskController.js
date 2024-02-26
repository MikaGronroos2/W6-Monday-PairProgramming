const mongoose = require("mongoose");
const TodoTask = require("../models/todoTaskModel");
const { findById } = require("../models/userModel");

// get all TodoTasks
const getTodoTasks = async (req, res) => {
  try {
    const allTodoTasks = await TodoTask.find();
    res.json(allTodoTasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get TodoTask by ID
const getTodoTask = async (req, res) => {
  try {
    const todo = await findById(req.user._id);
    if (!todo) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a Task
const addTodoTask = async (req, res) => {
  const { title, description, dueDate, user_id, completed } = req.body;
  try {
    const todo = new TodoTask({
      title,
      description,
      dueDate,
      user_id,
      completed,
    });
    const savedTask = await todo.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete TodoTask by ID
const deleteTodoTask = async (req, res) => {
  const task = await TodoTask.findByIdAndDelete({ _id: req.params.id });
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(200).json({ message: "Task deleted" });
};

// Update TodoTask by ID
const updateTodoTask = async (req, res) => {
  try {
    const tour = await TodoTask.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!tour) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json({ message: "Task updated", data: tour });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTodoTasks,
  addTodoTask,
  getTodoTask,
  deleteTodoTask,
  updateTodoTask,
};
