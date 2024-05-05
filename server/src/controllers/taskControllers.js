const Task = require('../models/taskModels');

const POST = async (req, res) => {
    try{
        const{taskNo, taskTitle, taskDescription, taskStatus, taskPriority,date}=req.body;

        const newTask = new Task ({
            taskNo,
            taskTitle,
            taskDescription,
            taskStatus,
            taskPriority,
            date
        });
        const savedTask = await newTask.save();
        res.json(savedTask);
        }catch(error){
            res.status(500).json({message: error.emssage});
    }

};
const GET = async (req, res) => {
    try{
        const savedTask = await Task.find();
        res.json(savedTask);
    } catch (err){
        res.status(500).json({message: err.message});
    }
};

const UPDATE = async (req, res) => {
    try {
        const taskNo = req.params.taskNo;
        const { taskTitle, taskDescription, taskStatus, taskPriority, date } = req.body;

        const updatedTask = await Task.findOneAndUpdate(
            { taskNo: taskNo }, // Find task by taskNo
            { taskTitle, taskDescription, taskStatus, taskPriority, date }, // Updated task data
            { new: true } // Return the updated document
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const DELETE = async (req, res) => {
    try {
        const taskNo = req.params.taskNo;

        const deletedTask = await Task.findOneAndDelete({ taskNo: taskNo });

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({ message: "Task removed successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {POST, GET, UPDATE, DELETE};