const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
   
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
    
    zoomLink: {
        type: String
    },
    

})

module.exports = mongoose.model('Student', studentSchema)