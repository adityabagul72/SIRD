const express = require('express');
const router = express.Router();
const {getStudents,insertStudents} = require('../controllers/student.controller.js');

// Get students
router.get('/students',getStudents);
// router.get('/students/insert',insertStudents);

module.exports = router;