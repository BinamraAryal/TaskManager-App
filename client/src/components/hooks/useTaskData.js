import {useState, useEffect} from 'react';

const useTaskData = () =>{
  const[tasks,setTasks] = useState([]);
  const[selectedTask, setSelectedTask] = useState(null);
  


    // Function to fetch tasks from the server
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/taskList');
        if (response.ok) {
          const tasksData = await response.json();
          setTasks(tasksData);
        } else {
          console.log('Failed to fetch tasks');
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    useEffect(() => {
      fetchTasks(); // Fetch tasks from the server when the component mounts
    }, []);

    //Function to add a task to the list
    const addTask = async (newTask) => {
      if (newTask.taskTitle === '') {
        console.log('Add task is clicked without adding any task title');
        alert('Add task is clicked without adding any task title');
      } else {
          try{
            const response = await fetch('http://localhost:5001/api/addTask',{
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(newTask),
            });

            if (response.ok){
              const savedTask = await response.json();
              console.log('Server response:', savedTask);
              setTasks([...tasks, savedTask]);
            }else{
              console.log("Failed to add task");
            }

          }catch(error){
            console.log('Error saving task: ', error);
          }
      }
    };

    // Function to handle TaskList click event
    const handleTaskClick = (tasks)=>{
        setSelectedTask(tasks);
        console.log("Task selected:",tasks);
       
    };

// Function to update a task
const updateTask = async (updatedTask) => {
  try {
      const response = await fetch(`http://localhost:5001/api/updateTask/${updatedTask.taskNo}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
          const updatedTaskFromServer = await response.json();
          const updatedTasks = tasks.map((task) =>
              task.taskNo === updatedTask.taskNo ? updatedTaskFromServer : task
          );
          setTasks(updatedTasks);
          setSelectedTask(null);
      } else {
          console.log("Failed to update task");
      }
  } catch (error) {
      console.log('Error updating task:', error);
  }
};

// Function to remove a task
const removeTask = async (taskNoToRemove) => {
  try {
    const response = await fetch(`http://localhost:5001/api/removeTask/${taskNoToRemove}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setTasks(prevTasks => prevTasks.filter(task => task.taskNo !== taskNoToRemove));
      setSelectedTask(null); // Clear the selected task after removal
    } else {
      console.log("Failed to remove task");
    }
  } catch (error) {
    console.log('Error removing task:', error);
  }
};

  
  return{tasks, selectedTask, addTask, updateTask, handleTaskClick, removeTask}
};


export default useTaskData;