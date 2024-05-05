const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

const postRoute = router.post('/addTask',taskController.POST);
const getRoute = router.get('/taskList', taskController.GET);
const updateRoute = router.put('/updateTask/:taskNo',taskController.UPDATE);
const deleteRoute = router.delete('/removeTask/:taskNo', taskController.DELETE);

module.exports = [postRoute, getRoute, updateRoute, deleteRoute];