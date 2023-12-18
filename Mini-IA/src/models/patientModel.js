const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true,
    },
    otherNames: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    emergencyContactName: {
        type: String,
        required: true,
    },
    emergencyContactNumber: {
        type: String,
        required: true,
    },
    Relationshiop: {
        type: String,
        required: true,
    }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;