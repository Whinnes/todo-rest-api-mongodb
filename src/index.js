const express = require('express');
const bodyParser = require('body-parser')
const db = require('./database')

//Init
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/tasks', require('./routes/tasks.routes'));

//Start server
app.listen(app.get('port'),()=>{
    console.log('Server running on port', app.get('port'));
})
