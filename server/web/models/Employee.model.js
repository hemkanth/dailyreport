var mongoose = require('mongoose'),
    Schema =  mongoose.Schema;

var EmployeeSchema = mongoose.Schema(
    {
        Name : { type: String, required: true },
        MobileNumber : { type: String, required: true, unique: true },
        Email : { type: String, required: true, unique: true },
        AlternativeEmail: { type: String },
        EmployeeType: { type: String, required: true },
        UserName: { type: String, required: true, unique: true },
        Password: { type: String, required: true },
        TryAuthCount: { type: String },
        CreatedBy: { type: Schema.Types.ObjectId, ref: 'Employee' },
        UpdatedBy: { type: Schema.Types.ObjectId, ref: 'Employee' }
    },
    {
        timestamps: true
    }
);

var VarEmployeeSchema = mongoose.model('Employee', EmployeeSchema, 'Employee_List');

module.exports = {
    EmployeeSchema : VarEmployeeSchema
};