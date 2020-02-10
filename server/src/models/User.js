const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
    type: String,
    required: true
}

const userSchema = new Schema({
    email: {
        ...requiredString
    },
    firstName: {
        ...requiredString,
    },
    lastName: {
        ...requiredString
    },
    userDOB: Date,
    userName: {
        ...requiredString
    },
    password: {
        ...requiredString
    },
    createdAt: Date,
    updatedAt: Date,
    userRole: {
        ...requiredString
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;