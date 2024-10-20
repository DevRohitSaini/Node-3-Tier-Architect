import Student from './model.js';

export const createStudent = async (payLoad) => {
    console.log("Check the payload ----->> ", payLoad);
    const student = await Student.create(payLoad);
    console.log("Check the student from DB ----->> ", student);
    return student;
}

export const getAllStudents = async () => {
   const studentList = await Student.find({});
   return studentList;
}

export const getStudentById = async (studentId) => {
    console.log("Check student id ------>> ", studentId);
    const studentObject = await Student.findOne({_id: studentId});
    console.log("See the studentObject --->> ", studentObject);
    return studentObject;
}

export const updateStudent = async (studentId, payLoad) => {
    const upStudent = await Student.findOneAndUpdate({_id: studentId}, payLoad);
    const studentObject = await Student.findOne({_id: studentId});
    return studentObject;
}

export const deleteStudent = async (studentId) => {
    const delStudent = await Student.deleteOne({_id: studentId});
    return delStudent;
}

export const loginStudent = async (username, password) => {
    console.log("Check username ------>> ", username);
    console.log("Check password ------>> ", password);
    const studentObject = await Student.findOne({username: username, password: password });
    console.log("See the studentObject after login --->> ", studentObject);
    return studentObject;
}