//requirements
const express = require('express');
//connecting database
const sqlite3 = require('sqlite3').verbose();

//intialize the port
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//connecting application//creating new object db
const db = new sqlite3.Database('./db/employee-tracker', err =>{
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to Employee Tracker Database');
})

//catch all function
app.use((req, res)=>{
    res.status(400).end();
})

//server listening//starting after db connection
db.on('open', ()=>{
        app.listen(PORT, ()=>{
        console.log (`Server running on port ${PORT}`)
    });
})
