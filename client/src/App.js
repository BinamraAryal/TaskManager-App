import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskEditor from './components/TaskEditor';
import useTaskData from './components/hooks/useTaskData';
const App=()=>{

  const{tasks, selectedTask, addTask, updateTask, handleTaskClick, removeTask} = useTaskData();
    return(
        <div className="App">
            <TaskForm addTask={addTask}/>
            <TaskList tasks={tasks} handleTaskClick={handleTaskClick}/>
            <TaskEditor selectedTask={selectedTask} updateTask={updateTask} onRemoveTask={removeTask}/>
        </div>
    );
};
export default App;
