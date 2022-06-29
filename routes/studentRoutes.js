const express = require('express');
const { getAllStudents, studentCreate, getSingleStudent } = require('../controller/studentController');
const router = express.Router();


// routes 
router.get('/', getAllStudents);
router.get('/create', studentCreate);
router.get('/:id', getSingleStudent);





module.exports = router;