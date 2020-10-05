exports.listTasks = ((req,res)=>{
    res.send('List')
})

exports.listTaskById = ((req,res)=>{
    res.send('List task by id')
})

exports.createTask = ((req,res)=>{
    res.send('Create task')
})

exports.updateTaskById = ((req,res)=>{
    res.send('Update task by id')
})

exports.deleteTaskById = ((req,res)=>{
    res.send('Delete task by id')
})