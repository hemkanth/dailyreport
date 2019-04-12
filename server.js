
// import modules
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var CONFIG = require('./config.json');
var MemberModel = require('./server/web/models/Employee.model.js');

// set port & assign var to express function
var port = process.env.PORT || parseInt(CONFIG.PORT);
var app = express();

process.setMaxListeners(0);
process.on('unhandledRejection', function(reason, promise) {
   console.error("'Un Handled Rejection' Error Log File - " + new Date().toLocaleDateString());
});
process.on('uncaughtException', function (err) {
   console.error(" 'Un Caught Exception' Error Log File - " + new Date().toLocaleDateString());
});

// DB Connection
mongoose.connect(CONFIG.DATABASE, { useNewUrlParser: true, useCreateIndex: true, });
mongoose.connection.on('error', (err) => {   // Error in DB Connection
   console.log('DB Connection Error', err);
});
mongoose.connection.once('open', () => {     // DB Connected Successfully 
   console.log('DB Connected Successfully');
});

// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// import routes web non-validation req
require('./server/web/routes/Authentication.routes.js')(app);

// Validate every request form client
app.use('/api', function(req, res, next) {
   if(req.headers.authorization) {
      ValidateRequest(req.headers.authorization, function(callback) {
         if(callback) {
            return next();
         } else {
            res.status(401).send({message: 'Authorization failed'})
         }
      });
   } else {
      res.status(401).send({message: 'Authorization failed'})
   }
});

function ValidateRequest(authorizationKey, callback) {
   MemberModel.EmployeeSchema.findOne({_id: mongoose.Types.ObjectId(authorizationKey.slice(0, -32))}, {})
   .exec(function(err, response) {
      if(!err && response !== null) {
         return callback(true);
      } else {
         return callback(false);
      }
   });
}

app.use(express.static(__dirname + '/view/dist/view/'));

app.use(function(req, res) {
   res.sendFile(path.join(__dirname, '/view/dist/view', 'index.html'));
});

app.get('*', function(req, res){
   res.send('502 Bad Gateway');
});

app.listen(port, function(){
   console.log('Listening on port ' + port);
});
