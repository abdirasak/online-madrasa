const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
   
    firstName: {
        type: String,
        required: [true, 'Please insert your firat name']
    },

    lastName: {
        type: String,
        required: [true, 'Please insert your last name']
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
    }
})

module.exports = mongoose.model('Teacher', teacherSchema)