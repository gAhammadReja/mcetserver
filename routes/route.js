
import express, { Router } from 'express';
import { deleteStudent, getTeachers, getTeachersData, updatetUsers ,getNewEnroll,getAllStudent, deleteTeacher , getNotice, updatetStd, getStd} from '../controller/user-controller.js';
import multer from 'multer';
import {Student, Teachers ,Enrolls , Notice} from '../schema/user-schema.js';


const router = express.Router();

const teachersImg = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'teachers');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const teachersImgUpload = multer({ storage: teachersImg });

router.post('/addTeacher', teachersImgUpload.single('staffImage'), async (req, res) => {
    const teachers = new Teachers();
    teachers.staffName = req.body.staffName;
    teachers.userId = req.body.userId;
    teachers.depertment = req.body.depertment;
    teachers.position = req.body.position;
    teachers.roll = req.body.roll;
    teachers.staffImage = req.file.originalname;
    teachers.save();
    res.status(201).json('success');
});



const studentImg = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'students');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const studentImgUpload = multer({ storage: studentImg });

router.post('/addStudent', studentImgUpload.single('studentImage'), async (req, res) => {
    const students = new Student();
    students.studentName = req.body.studentName;
    students.uRoll = req.body.uRoll;
    students.stream = req.body.stream;
    students.year = req.body.year;
    students.feesPaid = req.body.feesPaid;
    students.courseFee = req.body.courseFee;
    students.studentImage = req.file.originalname;
    students.save();
    res.status(201).json('success');
});



const PreMarksheet = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'enrollNew');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const sPreMarksheetUpload = multer({ storage: PreMarksheet });

router.post('/NewEnroll', sPreMarksheetUpload.single('sPreMarksheet'), async (req, res) => {
    const enrolls = new Enrolls();
    enrolls.sName = req.body.sName;
    enrolls.sMail = req.body.sMail;
    enrolls.sMobile = req.body.sMobile;
    enrolls.sGender = req.body.sGender;
    enrolls.address = req.body.address;
    enrolls.stream = req.body.stream;
    enrolls.sPreMarksheet = req.file.originalname;
    enrolls.save();
    res.status(201).json('success');
});








 
router.get('/allTeachers', getTeachers);
router.post('/deleteTeacher', deleteTeacher);

router.get('/getNewEnroll', getNewEnroll);

router.get('/allStudents', getAllStudent);
router.post('/deleteStudent', deleteStudent);

// router.post('/getTeachers', getTeachersData);

// router.post('/updateUser', updatetUsers)
// router.post('/deleteUser', deleteUser)






///Works
//Notice
const noticeFile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'notice');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const noticeFileUpload = multer({ storage: noticeFile });
router.post('/noticeUpload', noticeFileUpload.single('noticeFile'), async (req, res) => {
    const notice = new Notice();
    notice.title = req.body.title;
    notice.desc = req.body.desc;
    notice.noticeFile = req.file.originalname;
    notice.save();
    res.status(201).json('success');
});
router.get('/getNotice', getNotice);



export default router;

router.post('/getStd', getStd);
router.post('/updateStd', updatetStd);
