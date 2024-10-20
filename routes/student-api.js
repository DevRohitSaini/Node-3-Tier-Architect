import express from 'express';

import {createStudent, loginStudent, dashboard, getAllStudents, getStudentById, updateStudent, deleteStudent} from "../student/controller.js";
import studentValidate from "../student/validator.js";
import authenticate from "../middleware/auth.js";
const endpoint = express.Router();
// add a new student to database

/**
 * @openapi
 * '/api/student':
 *  post:
 *     tags:
 *     - Student
 *     summary: Create a student
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - class
 *              - roll
 *              - username
 *              - password
 *              - isActive
 *            properties:
 *              name:
 *                type: string
 *              class:
 *                type: string
 *              roll:
 *                type: number
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              isActive:
 *                type: number
 *                default: 1
 *              
 *     responses:
 *      201:
 *        description: Created
 *      403:
 *        description: Bad Request
 *      422:
 *        description: Unprocessable Entity
 */
endpoint.post('/student', studentValidate("createStudent"), createStudent);

// login student
/**
 * @openapi
 * '/api/login-student':
 *  post:
 *     tags:
 *     - Student
 *     summary: Login Student
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              
 *     responses:
 *      201:
 *        description: Created
 *      403:
 *        description: Bad Request
 *      422:
 *        description: Unprocessable Entity
 */
endpoint.post('/login-student', studentValidate("loginStudent"), loginStudent);

// Access student dashboard
endpoint.post('/dashboard', authenticate, dashboard);

// get a list of students from the database
/**
 * @openapi
 * '/api/students':
 *  get:
 *     tags:
 *     - Student
 *     summary: Get all students
 *     parameters:
 *      - name: x-access-token
 *        in: header
 *        description: The JWT Token for a logged in student
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
endpoint.get('/students', authenticate, getAllStudents);

// get a student from the database by id
/**
 * @openapi
 * '/api/student/{id}':
 *  get:
 *     tags:
 *     - Student
 *     summary: Get student by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the student
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
endpoint.get('/student/:id', authenticate, getStudentById);

// update a student in the database
/**
 * @openapi
 * '/api/student/{id}':
 *  put:
 *     tags:
 *     - Student
 *     summary: Update student by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the student
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
endpoint.put('/student/:id', authenticate, updateStudent);

// delete a student in the database
/**
 * @openapi
 * '/api/student/{id}':
 *  delete:
 *     tags:
 *     - Student
 *     summary: Delete student by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the student
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
endpoint.delete('/student/:id', authenticate, deleteStudent);

export default endpoint;