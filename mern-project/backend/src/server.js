import express from 'express';
import taskRoute from './routes/taskRouters.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use('/api/tasks', taskRoute);
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/tasks', (req, res) => {
  res.json({ tasks: ['Task 1', 'Task 2', 'Task 3'] });
});