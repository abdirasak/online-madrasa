const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },

    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true

    },

    tell: {
        type: String,
        required: [true, 'Please add your phone number']
    },

    address: {
        street: {
            type: String,
            required: [true, 'Please add adress line one']
        },

        city: {
            type: String,
            required: [true, 'Please add city']
        }, 

        postCode:{
            type: String,
            required: [true, 'Please add city']
        }
    },

    password: {
        type:String,
        required: [true, 'Please add a password']
    },
    role: {
        type: String,
        default: 'basic',
        enum: ["basic", "admin"]
       },
   

}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)