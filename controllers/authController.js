const path = require("path");
const mongoose = require('mongoose');
const User = require('../models/userModel');



const uri = 'mongodb+srv://ahsem:GMcunning32@cluster0.f3k2hxd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('authController.js: Connected to MongoDB');
});


exports.getRegister = (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'public', 'signup.html'));
};


exports.postRegister = async (req, res) => {
    console.log("POST auth/register/ called");


    var fullname = req.body.fullname;
    var userhandle = req.body.userhandle;
    var userpassword = req.body.password;

    const newUser = new User({
        fullname: fullname, 
        userhandle: userhandle,
        userpassword: userpassword 
    });
    const savedUser = await newUser.save();
    console.log("User is saved.");


    res.sendFile(path.join(__dirname, "..", 'public', 'redirect.html'));
};

exports.getLogin = (req, res) => {
    console.log("GET auth/login/");
    res.sendFile(path.join(__dirname, "..", 'public', 'signin.html'));
};

exports.postLogin = async (req, res) => {
    console.log("POST auth/login/");

    var userhandle = req.body.userhandle;
    var password = req.body.password;

    const userExist = await User.exists({userhandle});

    if (userExist) {

    } else {
        res.sendFile(path.join(__dirname, "..", 'public', 'userdoesnotexist.html'));
    }
};



  
exports.getUsers = (req, res) => {
res.json({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] });
};
