const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskNo: Number,
    taskTitle: String,
    taskDescription: String,
    taskStatus: String,
    taskPriority: String,
    date: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;