const mongoose = require('mongoose');


const studentModel = mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Feild is required']
    },
    email : {
        type : String,
        required : [true, 'Email is required'],
        unique : true
    }, 
    photo : {
        type : String,
        default : 'avatar.png'
    }
});



module.exports = mongoose.model('Student', studentModel);