const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_name: { type: String, required: true },
    university_name: { type: String, required: true },
    department: { type: String, required: true },
    internship_or_ms: { type: String, required: true },
    year: { type: String, required: true }
});

module.exports = mongoose.model('Student', studentSchema);