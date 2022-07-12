const express = require('express');
const { GetAllStudents, CreateStudent, StoreStudent, SingleStudent, EditSudent, UpdateSudent, DeleteStudent } = require('../controller/studentController');
const router = express.Router();
const multer = require('multer');
const path = require('path');


// multer setup
const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, path.join(__dirname, '../assets/upload/'));
    },
    filename : (req, file, cb) => {
        let unique = Date.now() + '_' + file.originalname;
        cb(null, unique);
    }
});

const upload = multer({
    storage : storage,
    limits : 1
}).single('photo');



// routes
router.get('/', GetAllStudents);
router.get('/create', CreateStudent);
router.post('/store', upload, StoreStudent);

router.get('/single/:id', SingleStudent);
router.get('/delete/:id', DeleteStudent);
router.get('/edit/:id', EditSudent);
router.post('/update/:id', upload, UpdateSudent);






module.exports = router;