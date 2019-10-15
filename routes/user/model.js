const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    account_created: {
        type: String,
        default: Date.now(),
    }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;