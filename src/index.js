const express = require('express');

//Init
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Routes
app.use('/tasks', require('./routes/tasks.routes'));

//Start server
app.listen(app.get('port'),()=>{
    console.log('Server running on port', app.get('port'));
})
