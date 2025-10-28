export const getAllTasks = (req, res) => {
  res.status(200).json({ tasks: ["Task 1", "Task 2", "Task 3"] });
};

export const createTask = (req, res) => {
  const { task } = req.body;
  // Here you would normally add the task to your database
  res.status(201).json({ message: `Task '${task}' created successfully!` });
};

export const updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  // Here you would normally update the task in your database
  res.status(200).json({ message: `Task with id '${id}' updated to '${task}' successfully!` });
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  // Here you would normally delete the task from your database
  res.status(200).json({ message: `Task with id '${id}' deleted successfully!` });
};
