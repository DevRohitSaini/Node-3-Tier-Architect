import { body } from 'express-validator';
const studentValidate = (method) => {
    switch (method) {
        case 'createStudent': {
            return [
                body("name", "Student name is required").not().isEmpty(),
                body("roll", "Roll number is required").not().isEmpty(),
                body("username", "Username is required").not().isEmpty(),
                body("password", "Password is required").not().isEmpty(),
                body("isActive").optional().isIn(['0', '1'])
            ]
        }
        case 'loginStudent': {
            return [
                body("username", "Username is required").not().isEmpty(),
                body("password", "Password is required").not().isEmpty()
            ]
        }
    }
}

export default studentValidate;