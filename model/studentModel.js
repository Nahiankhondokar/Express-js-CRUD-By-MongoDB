const mongoose = require('mongoose');


// student model
const studentModel = mongoose.Schema({
    name : {
        type : String, 
        required : [true, "name feild is required"],
        trim : true
    },
    email : {
        type : String, 
        required : [true, "email feild is required"],
        trim : true,
        unique : true
    },
    photo : {
        type : String, 
        default : 'avatar.png'
    }
});



// exports
module.exports = mongoose.model('Student', studentModel);