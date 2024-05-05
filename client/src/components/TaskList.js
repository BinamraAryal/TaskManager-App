import './styles/task-list.css';

const TaskList = ({  tasks, handleTaskClick }) => {
  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Date And Time</th>
            
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.taskNo}</td>
              <td onClick={()=>handleTaskClick(task)}style={{cursor: 'pointer', color:'blue'}}>{task.taskTitle}
              </td>
              <td>{task.taskDescription}</td>
              <td>{task.taskStatus}</td>
              <td>{task.taskPriority}</td>
              <td>{task.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
