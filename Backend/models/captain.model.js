const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            require: true,
            minLength: [3, 'firstName must be 3 characters long']
        },
        lastName: {
            type: String,
            minLength: [3, 'firstName must be 3 characters long']
        }
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w+$/, 'please enter a valid email']
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            require: true,
            minLength: [3, 'Color must be at least 3 characters long']
        },
        plate: {
            type: String,
            require: true,
            minLength: [3, 'Plate must be at least 3 characters long']
        },
        capacity: {
            type: String,
            require: true,
            minLength: [1, 'Capacity must be at least 1']
        },
        vehicleType: {
            type: String,
            require: true,
            enum: ['car', 'motorcycle', 'auto']
        },
    },
    location: {
        lat: {
            type: Number,
        },
        long: {
            type: Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({id:this._id} , process.env.JWT_SECRET , {expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password ,this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema)
module.exports = captainModel