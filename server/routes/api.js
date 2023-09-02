import express from 'express';

const router = express.Router();
// Initialize the todoItems array with some default tasks
let todoItems = [
    'HTML, CSS, & JS',
    'Vanilla Js & Jquery',
    'Basic PHP',
    'Bootstrap',
    'Wordpress & E-commerce',
    'React JS'
];

// Define a route to get the todoItems array
router.get('/todo', (req, res) => {
  // Disable caching for this specific endpoint
  res.setHeader('Cache-Control', 'no-store');
  res.json(todoItems);
});

// Define a route to add a new task to the todoItems array
router.post('/todo', (req, res) => {
  const newTodo = req.body.task;
  todoItems.push(newTodo);
  res.json({ message: 'Todo item added successfully' });
});

// Define a route to remove a task from the todoItems array
router.delete('/todo/:task', (req, res) => {
    const taskToRemove = req.params.task.trim();
    console.log('Removing task:', taskToRemove);

    // Create a copy of the todoItems array before filtering
    const beforeFilter = [...todoItems];

    // Remove non-alphanumeric characters from the task to be removed
    const sanitizedTaskToRemove = taskToRemove.replace(/[^a-zA-Z0-9]/g, '');

    // Filter the todoItems array to remove the specified task
    todoItems = todoItems.filter(todo => {
        // Remove non-alphanumeric characters from each task for comparison
        const sanitizedTodo = todo.trim().replace(/[^a-zA-Z0-9]/g, '');
        return sanitizedTodo.toLowerCase() !== sanitizedTaskToRemove.toLowerCase();
    });

    console.log('Before filter:', beforeFilter); // Log the array before filtering
    console.log('After filter:', todoItems); // Log the array after filtering

    res.json({ message: 'Todo item removed successfully' });
});

// Define a route to get a specific task from the todoItems array
router.get('/todo/:task', (req, res) => {
    const taskName = req.params.task.trim();

    // Find the specified task in the todoItems array
    const task = todoItems.find(todo => todo.trim().toLowerCase() === taskName.toLowerCase());

    if (task) {
      res.json({ task }); // Send the task as JSON if found
    } else {
      res.status(404).json({ message: 'Task not found' }); // Send a 404 response if task not found
    }
});

export default router;
