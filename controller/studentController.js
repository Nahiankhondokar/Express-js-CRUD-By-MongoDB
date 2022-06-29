

// get all studetn
const getAllStudents = (req, res) => {
    res.render('student');
}

// get all studetn
const studentCreate = (req, res) => {
    res.render('create');
}

// get single studetn
const getSingleStudent = (req, res) => {
    res.render('show');
}


module.exports = {
    getAllStudents,
    studentCreate,
    getSingleStudent
}