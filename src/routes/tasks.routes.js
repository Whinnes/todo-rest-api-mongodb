const router = require('express').Router();
const tasks = require('../controllers/tasks.controllers')

//Setting routes
router.get('/',tasks.listTasks);
router.get('/:id',tasks.listTaskById);
router.post('/',tasks.createTask);
router.put('/:id',tasks.updateTaskById);
router.delete('/:id',tasks.deleteTaskById);

module.exports = router;