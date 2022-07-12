const Student = require('../model/studentModel');
const path = require('path');

/**
 * @desc get all studetn
 * @name GET/STUDENT
 * @acess Public
 */
 const GetAllStudents = async (req, res) => {
    
    let allData = await Student.find();
    res.render('student', { allData });
}

/**
 * @desc get all studetn
 * @name GET/STUDENT
 * @acess Public
 */
 const CreateStudent = (req, res) => {
    res.render('create');
}


/**
 * @desc Store Student
 * @name POST/STUDENT
 * @acess Public
 */
 const StoreStudent = async (req, res) => {

    const { name, email } = req.body;
    const { filename } = req.file;
    await Student.create({
        ...req.body, 
        photo : filename
    });

    res.redirect('/students');
 
}


/**
 * @desc Single Student
 * @name GET/STUDENT
 * @acess Public
 */
 const SingleStudent = async (req, res) => {
    
    let id = req.params.id;
    let single = await Student.findById(id);
    res.render('show', { single });

}


/**
 * @desc Edit Sudent
 * @name GET/STUDENT
 * @acess Public
 */
 const EditSudent = async (req, res) => {

    let id = req.params.id;
    let edit = await Student.findById(id);
    res.render('edit', { edit });
}



/**
 * @desc Update Sudent
 * @name POST/STUDENT
 * @acess Public
 */
 const UpdateSudent = async (req, res) => {

    const id = req.params.id;
    const { name, email, old_photo} = req.body;

    if(req.file){
        await Student.findByIdAndUpdate(id, {
            name : req.body.name,
            email : req.body.email,
            photo : req.file.filename
        });
    }else{
        await Student.findByIdAndUpdate(id, {
            name,
            email, 
            photo : old_photo
        });
    }

    res.redirect('/students');

}


/**
 * @desc Delete Student
 * @name GET/STUDENT
 * @acess Public
 */
 const DeleteStudent = async (req, res) => {
    
    let id = req.params.id;
    const data = await Student.findByIdAndDelete(id);
    data.unlinkSync(path.join(__dirname, '../assets/upload/'), () => {
        
    });
    res.redirect('/students');

}





// exporst all controllers
module.exports = {
    GetAllStudents,
    CreateStudent,
    StoreStudent,
    SingleStudent,
    EditSudent,
    UpdateSudent,
    DeleteStudent
}