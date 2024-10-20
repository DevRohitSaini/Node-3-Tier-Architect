import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    name: {
        type: String
    },
    roll: {
        type: String,
        required: [true, 'Roll field is required']
    },
    class: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    createdDate: {
        type: Date
    },
    isActive: {
        type: Boolean,
        deafult: true
    }
});


const Student = mongoose.model('student',StudentSchema);

export default Student;