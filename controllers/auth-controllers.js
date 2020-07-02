const HttpError = require('../models/http-error');
var mysql = require('mysql');
const { connect } = require('../routes/authRoutes');
const { json } = require('body-parser');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password.1',
    database: 'registration'
});



const registration = (req, res, next) => {

    var sql = "INSERT INTO user set ?";
    let dobDate = new Date(req.body.dob);
    var value = {
        phonenumber: req.body.phonenumber,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: dobDate,
        gender: req.body.gender,
        email: req.body.email
    }
    let query = connection.query(sql, value, (error, results, fields) => {
        if (error) {
            res.json({
                "message": "Failed",
                "result": error.errno
            });
        }
        if (results) {
            res.json({
                "message": "Success",
                "result": results
            });
        }
        // Neat!
    });
    console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
};

exports.registration = registration;