import * as studentDao from "./dao.js";

export const createStudent = async (payLoad) => {
   return await studentDao.createStudent(payLoad);
}

export const getAllStudents = async() => {
   return await studentDao.getAllStudents();
}

export const getStudentById = async (id) => {
   return await studentDao.getStudentById(id);
}

export const updateStudent = async (id, payLoad) => {
   return await studentDao.updateStudent(id, payLoad);
}

export const deleteStudent = async (id) => {
    
   return await studentDao.deleteStudent(id);
}

export const loginStudent = async (username, password) => {
    
   return await studentDao.loginStudent(username, password);
}