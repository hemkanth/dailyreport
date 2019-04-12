var mongoose = require('mongoose'),
    Schema =  mongoose.Schema;

var ReportSchema = mongoose.Schema(
    {
        Name : { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
        Project : { type: Schema.Types.ObjectId, ref: 'Project', required: true },
        Date : { type: Date, required: true },
        Task : { type: String, required: true },
        StartTime : { type: Date, required: true },
        EndTime : { type: Date, required: true },
        Status : { type: String, required: true },
        Comments : { type: String },
        CreatedBy: { type: Schema.Types.ObjectId, ref: 'Employee' },
        UpdatedBy: { type: Schema.Types.ObjectId, ref: 'Employee' }
    },
    {
        timestamps: true
    }
);

var VarReportSchema = mongoose.model('Report', ReportSchema, 'Report_List');

module.exports = {
    ReportSchema : VarReportSchema
};