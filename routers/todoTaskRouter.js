const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoTaskController");
const requireAuth = require("../middleware/requireAuth");

// Require Authentication for all routes
router.use(requireAuth);

// Get all Tasks
router.get("/", todoController.getTodoTasks);

// Get a single Task by ID
router.get("/:id", todoController.getTodoTask);

// Create a new Task
router.post("/", todoController.addTodoTask);

// Update Task by ID
router.patch("/:id", todoController.updateTodoTask);

// Delete Task by ID
router.delete("/:id", todoController.deleteTodoTask);

module.exports = router;
