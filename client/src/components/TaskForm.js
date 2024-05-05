import React, { useState } from 'react';
import './styles/task-form.css';

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTitle] = useState('');
  const [taskDescription, setDescription] = useState('');
  const [taskCounter, setCounter] = useState(1);
  const [taskStatus, setStatus] = useState('Incomplete'); // State for status dropdown
  const [taskPriority, setPriority] = useState('Low'); // State for priority dropdown
  const [date, setDate] = useState(() => {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskNo: taskCounter,
      taskTitle,
      taskDescription,
      taskStatus,
      taskPriority,
      date,
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setCounter(taskCounter + 1);
    setDate(() => {
      const currentDate = new Date();
      return currentDate.toLocaleString();
    });
  };

  return (
    <div className="task-entry-container">
      <h1>Task Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter task description"
          value={taskDescription}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* Status Dropdown */}
        <select value={taskStatus} onChange={(e) => setStatus(e.target.value)}>
          <option value="Complete">Complete</option>
          <option value="Pending">Pending</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        {/* Priority Dropdown */}
        <select value={taskPriority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
