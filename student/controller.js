import * as studentService from "./service.js";
import {validationResult} from 'express-validator';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
const config = process.env;

dotenv.config();
export const createStudent = async(req, res, next) => {
    console.log("In createStudent controller ----->> ");
    const validResult = validationResult(req);
    console.log("Check validResult ------>> ", validResult);
    if(validResult.errors.length > 0) {
        res.status(422).send({"errors": validResult.errors});
    }
    else {
        req.body.createdDate = new Date();
        const tempass = req.body.password;
        //const cryptedPass= await bcrypt.hash(tempass, 10);

        //req.body.password = cryptedPass;
        try {
            const studentResult = await studentService.createStudent(req.body);
            console.log("studentResult =====>> ", studentResult);
            res.send(studentResult);
        } catch (error) {
            res.send({"errorMessage": "Couldn't create student due to " + error});
        }
    }
 }
 
 export const getAllStudents = async(req, res, next) => {
    try {
        const studentResult = await studentService.getAllStudents();
        res.send(studentResult);
    } catch (error) {
        res.send({"errorMessage": "Couldn't not fetch all students because ->" + error});
    }
 }
 
 export const getStudentById = async (req, res, next) => {
    try {
        const studentResult = await studentService.getStudentById(req.params.id);
        res.send(studentResult);
    } catch (error) {
        res.send({"errorMessage": "Couldn't not fetch the student because ->" + error});
    }
 }
 
 export const updateStudent = async (req, res, next) => {
    try {
        const studentResult = await studentService.updateStudent(req.params.id, req.body);
        res.send(studentResult);
    } catch (error) {
        res.send({"errorMessage": "Couldn't not update the student because ->" + error});
    }
    
 }
 
 export const deleteStudent = async (req, res, next) => {
    try {
        const studentResult = await studentService.deleteStudent(req.params.id);
        res.send(studentResult);
    } catch (error) {
        res.send({"errorMessage": "Couldn't not delete the student because ->" + error});
    }
   
 }

 export const loginStudent = async (req, res, next) => {
    try {
        const {username, password} = req.body;
        //const cryptedPass= await bcrypt.hash(tempass, 10);
        //console.log(tempass, "------", cryptedPass);
        const studentResult = await studentService.loginStudent(username, password);
        if(studentResult !=null && studentResult!= undefined && studentResult != "") {
            const token = jwt.sign(
                { studentId: studentResult._id, name: studentResult.name, roledId: 12 },
                config.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );

            const resultObject = {result: "success", token: token, student: studentResult }
            res.send(resultObject);
        }
        else {
            res.send({result: "failed", "error": "Invalid username or password"});
        }
    } catch (error) {
        res.send({"errorMessage": "Couldn't not login the student because ->" + error});
    }
 }

 export const dashboard = async (req, res, next) => {
    try {
        console.log("Check student data after authentication ------>> ", req.user);
        const resultObject = {result: "success"}
        res.send(resultObject);
    } catch (error) {
        res.send({"error": "Couldn't not login the student because ->" + error});
    }
}