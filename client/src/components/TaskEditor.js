import React, { useState, useEffect } from 'react';
import './styles/task-editor.css';

const TaskEditor = ({ selectedTask, updateTask, onRemoveTask }) => {
    const [editedTask, setEditedTask] = useState(null);


    useEffect(() => {
      if (selectedTask) {
          setEditedTask(selectedTask);
      } else {
          setEditedTask({
              taskTitle: '',
              taskDescription: '',
              taskStatus: 'Incomplete',
              taskPriority: 'low',
          });
      }
  }, [selectedTask]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const currentDate = new Date().toLocaleString();
      setEditedTask({
        ...editedTask,
        [name]: value,
        date:currentDate
      });
    };
;
   
  return (
    <div className="task-editor-container">
      <h1>Task Editor</h1>
      {selectedTask ? (
        <div className="editor-form">
          <label>
            Name:
            <input
              type="text"
              name="taskTitle"
              value={editedTask.taskTitle}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="taskDescription"
              value={editedTask.taskDescription}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Status:
            <select
              name="taskStatus"
              value={editedTask.taskStatus}
              onChange={handleInputChange}
            >
              <option value="Incomplete">Incomplete</option>
              <option value="Pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
          </label>
          <label>
            Priority:
            <select
              name="taskPriority"
              value={editedTask.taskPriority}
              onChange={handleInputChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
          <button onClick={()=>updateTask(editedTask)}>Update Task</button>
          <button onClick={()=>onRemoveTask(editedTask.taskNo)}>Remove Task</button>
        </div>
      ) : (
        <p>No task selected for editing</p>
      )}
    </div>
  );
};

export default TaskEditor;
