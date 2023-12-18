const mongoose = require('mongoose');

const visitationSchema = new mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    visit_date: {
        type: Date,
        default: Date.now,
    },
    reason: {
        type: String,
        required: true,
    },

});
const Visitation = mongoose.model('Visitation', visitationSchema);

module.exports = Visitation;