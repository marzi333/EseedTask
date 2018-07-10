var {mongoose} = require('../db/mongoose-config');

var Employee = mongoose.model('Employee', {
    Name:{
        type: String,
        require: true,
        minlength:1,
        trim: true
    },
    Email:{
        type: String,
        require: true,
        minlength:1,
        trim: true
    },
    MobileNo:{
        type: String,
        require: true,
        minlength:11,
        trim: true
    },
    HireDate:{
        type: Date,
        require: true
    }
});

module.exports = {Employee};