var mongoose = require('mongoose'),
    Schema =  mongoose.Schema;

var ProjectSchema = mongoose.Schema(
    {
        Project : { type: String, required: true },
        StartDate : { type: Date, required: true },
        DueDate: { type: Date, required: true },
        AssignedTo: { type: Schema.Types.ObjectId, ref: 'Employee' },
        CreatedBy: { type: Schema.Types.ObjectId, ref: 'Employee' },
        UpdatedBy: { type: Schema.Types.ObjectId, ref: 'Employee' }
    },
    {
        timestamps: true
    }
);

var VarProjectSchema = mongoose.model('Project', ProjectSchema, 'Project_List');

module.exports = {
    ProjectSchema : VarProjectSchema
};