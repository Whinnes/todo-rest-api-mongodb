const tasksModel = require('../models/tasks.model')

exports.listTasks = async(req,res)=>{
    await tasksModel.find({},(err,tasks)=>{
    if(err)
        res.send(err)
    res.json(tasks)
    })
}

exports.listTaskById = async(req,res)=>{
    await tasksModel.findById({_id: req.params.id},(err,tasks)=>{
    if(err)
        res.send(err)
    res.json(tasks)
    })
}

exports.createTask = async(req,res)=>{
    const newTask = new tasksModel(req.body)
    await newTask.save((err, task)=>{
        if(err)
            res.send(err)
        res.json(task)
    })
}

exports.updateTaskById = async(req,res)=>{
    await tasksModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},(err, task)=>{
        if(err)
            res.send(err)
        res.json(task)
    })
}

exports.deleteTaskById = async(req,res)=>{
    tasksModel.findOneAndDelete({_id: req.params.id}, (err)=>{
        if(err)
            res.send(err)
        res.json({message: "Task removed"})
    })
}