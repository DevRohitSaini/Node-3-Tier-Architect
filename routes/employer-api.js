const express = require('express');
const endpoint = express.Router();
const {createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent} = require("../student/controller");
const userValidator = require("../student/validator");

// add a new student to database
endpoint.post('/student', userValidator.validate("createStudent"), createStudent);

// get a list of students from the database
endpoint.get('/students', getAllStudents);

// get a student from the database by id
endpoint.get('/student/:id',getStudentById);

// update a student in the database
endpoint.put('/student/:id',updateStudent);

// delete a student in the database
endpoint.delete('/student/:id',deleteStudent);

module.exports = endpoint;