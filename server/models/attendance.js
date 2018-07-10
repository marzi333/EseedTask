var mongoose = require('mongoose');
var {Employee} = require('./employee');
var {Status}

var Attendance = mongoose.model('Attendance', {
    Day:{
        type: ['Monday', 'Tuesday', 'Wednesday'],
        require: true,
        trim: true
    },
    WorkingHours:{
        type: Number,
        require: true,
        max: 8,
        trim: true
    },
    Employee:{
        type: Employee,
        require: true
    },
    Status:{
        type: ['Present', 'Sick Leave', 'Day OFF'],
        require: true,
        trim: true
    }
});

module.exports = {Attendance};