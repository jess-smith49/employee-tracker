const express = require ('express');
const router = express.Router();
const db = require('../db/database');

//view all employees
router.get('/employees', (req, res) => {
    const sql = 'SELECT * FROM employees'
});