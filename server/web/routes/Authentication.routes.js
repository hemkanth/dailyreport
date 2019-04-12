module.exports = function(app) {
    var AuthenticationController = require('../controllers/Authentication.controller.js');

    app.post('/api/employee/login', AuthenticationController.Employee_Login);
    app.post('/api/employee/registration', AuthenticationController.Employee_Register);
};