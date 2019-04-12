var mongoose = require('mongoose'),
    Schema =  mongoose.Schema;

var AttendanceSchema = mongoose.Schema(
    {
        Name : { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
        Attendance : { type: String, required: true },
        Date : { type: Date, required: true },
        InTime: { type: Date, required: true },
        OutTime: { type: Date, required: true },
        CreatedBy: { type: Schema.Types.ObjectId, ref: 'Employee' },
        UpdatedBy: { type: Schema.Types.ObjectId, ref: 'Employee' }
    },
    {
        timestamps: true
    }
);

var VarAttendanceSchema = mongoose.model('Attendance', AttendanceSchema, 'Attendance_List');

module.exports = {
    AttendanceSchema : VarAttendanceSchema
};