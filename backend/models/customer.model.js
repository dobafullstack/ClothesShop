const mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const customerSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String, 
        required: true,
    },
    name: {
        type: String, 
        required: true,
    },
    phone: {
        type: String, 
        default: ''
    },
    address: {
        type: String, 
        default: ''
    },
    age: {
        type: Number, 
        default: 0
    },
    resetLink: {
        type: String, 
        default: ''
    }
});

const Customer = new mongoose.model('Customer', customerSchema, 'customers');

module.exports = Customer;