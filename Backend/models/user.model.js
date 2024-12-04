const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            require: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastName: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        },
    },
    email: {
        type: String,
        require: true,
        unique: true,
        minlength: [5, 'Email name must be at least 3 characters long'],
    },
    password: {
        type: String,
        require: true,
        select:false,   //this is used when we have to find a user and that time password should not go there
    },
    socketId: {
        type: String
    }
})
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id} , process.env.JWT_SECRET , {expiresIn: '24h'});
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password ,this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;