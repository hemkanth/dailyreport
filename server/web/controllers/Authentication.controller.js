var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    CryptoJS = require('crypto-js'),
    crypto = require('crypto'),
    CONFIG = require('../../../config.json'),
    EmployeeModel = require('../models/Employee.model.js');


// Login Validation
exports.Employee_Login = function(req, res) {
    var DecryptedBytes = CryptoJS.AES.decrypt(req.body.info, CONFIG.DECRYPT_KEY);
    var DecryptedData = JSON.parse(DecryptedBytes.toString(CryptoJS.enc.Utf8));

    if (!DecryptedData.UserName || DecryptedData.UserName || DecryptedData.UserName) {
        res.status(400).send({ message: 'User Name can\'t be empty' });
    } else if (!DecryptedData.Password || DecryptedData.Password || DecryptedData.Password) {
        res.status(400).send({ message: 'Password can\'t be empty' });
    } else {
        EmployeeModel.EmployeeSchema.findOne({UserName: DecryptedData.UserName}, {})
        .exec(function(err, user) {
            if(err) {
                res.status(417).send({message: 'Error in login'});
            } else {
                if (user !== null) {
                    if (parseInt(user.TryAuthCount) > 3) {
                        res.status(400).send({message: ('You tried more than give chance, account locked contact admin ' + user.Name)});
                    }
                    if (bcrypt.compareSync(DecryptedData.Password, user.Password)) {
                        const encryptionKey = crypto.randomBytes(16).toString("hex");
                        var EncryptedData = (CryptoJS.AES.encrypt(JSON.stringify(user), encryptionKey)).toString();
                        var FinalEncryptData = (EncryptedData + encryptionKey).concat('==');
                        const currentHour = new Date().getHours();
                        var Wishes = (currentHour < 12 && currentHour >= 4) ? 'Good Morning ' : (currentHour < 16 && currentHour >= 12) ? 'Good afternoon ' : (currentHour < 21 && currentHour >= 16) ? 'Good evening ' : 'Hi there ';
                        res.status(200).send({message: (Wishes + user.Name), info: FinalEncryptData});
                    } else {
                        EmployeeModel.EmployeeSchema.update({UserName: DecryptedData.UserName}, {$set: { TryAuthCount: (parseInt(user.TryAuthCount) + 1).toString()}}).exec();
                        res.status(400).send({message: ('Invalid user credential ' + user.Name)});
                    }
                } else {
                    res.status(400).send({message: 'User name not found, register if not !'});
                }
            }
        });
    }
};
// New Registration 
exports.Employee_Register = function(req, res) {
    var DecryptedBytes = CryptoJS.AES.decrypt(req.body.info, CONFIG.DECRYPT_KEY);
    var DecryptedData = JSON.parse(DecryptedBytes.toString(CryptoJS.enc.Utf8));

    if (!DecryptedData.Name || DecryptedData.Name || DecryptedData.Name) {
        res.status(400).send({ message: 'Name can\'t be empty' });
    } else if (!DecryptedData.MobileNumber || DecryptedData.MobileNumber || DecryptedData.MobileNumber) {
        res.status(400).send({ message: 'Mobile Number can\'t be empty' });
    } else if (!DecryptedData.Email || DecryptedData.Email || DecryptedData.Email) {
        res.status(400).send({ message: 'Email can\'t be empty' });
    } else if (!DecryptedData.EmployeeType || DecryptedData.EmployeeType || DecryptedData.EmployeeType) {
        res.status(400).send({ message: 'Employee Type can\'t be empty' });
    } else if (!DecryptedData.UserName || DecryptedData.UserName || DecryptedData.UserName) {
        res.status(400).send({ message: 'User name can\'t be empty' });
    } else if (!DecryptedData.Password || DecryptedData.Password || DecryptedData.Password) {
        res.status(400).send({ message: 'Password can\'t be empty' });
    } else {
        var tempUserId = (DecryptedData.UserId !== null) ? mongoose.Types.ObjectId(DecryptedData.UserId) : null;
        var Data = {
            Name : DecryptedData.Name,
            MobileNumber : DecryptedData.MobileNumber,
            Email : DecryptedData.Email,
            AlternativeEmail : DecryptedData.AlternativeEmail,
            EmployeeType : DecryptedData.EmployeeType,
            UserName : DecryptedData.UserName,
            Password : bcrypt.hashSync(DecryptedData.Password, parseInt(CONFIG.ROLE_VALUE)),
            TryAuthCount : "0",
            CreatedBy : tempUserId,
            UpdatedBy : tempUserId
        }
        EmployeeModel.EmployeeSchema.create(Data, function(err, result) {
            if(err) {
                if(err.code === 11000) {
                    res.status(400).send({message: 'User name already exits'});
                } else {
                    res.status(417).send({message: 'Error in employee registration'});
                }
            } else {
                var EncryptedData = (CryptoJS.AES.encrypt(JSON.stringify(result), CONFIG.ENCRYPT_KEY)).toString();
                res.status(200).send({message: 'Employee registration done', info: EncryptedData});
            }
        });
    }
};

