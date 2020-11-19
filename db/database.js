const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/employee-tracker.db', err => {
    if(err){
        return console.error(err.message);
    }
    console.log("Connected to the Employer Management Database.")
});

module.exports = db;