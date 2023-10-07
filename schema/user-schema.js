import mongoose from "mongoose";

const teachersSchema = mongoose.Schema({
    staffName:String,
    userId:String,
    position:String,
    depertment:String,
    roll:String,
    staffImage:String
});
const Teachers = mongoose.model('teachers', teachersSchema);

const studentsSchema = mongoose.Schema({
    studentName:String,
    uRoll:Number,
    stream:String,
    // studentdob:Date,
    // sgender:String,
    year:String,
    // address:String,
    // adate:Date,
    feesPaid:Number,
    courseFee:Number,
    studentImage:String,
    // studentPhone:String,
    // sPreMarksheet:String
});
const Student = mongoose.model('students', studentsSchema);

const enrollNewSchema = mongoose.Schema({
    sName: String,
      sMail: String,
      sMobile:String,
      sGender: String,
      address: String,
      stream: String,
      sPreMarksheet: String,
});
const Enrolls = mongoose.model('enrolls', enrollNewSchema);
export {Teachers};
export {Student};
export {Enrolls};

const NoticeSchema = mongoose.Schema({
    title:String,
    desc:String,
    noticeFile:String
});
const Notice = mongoose.model('notice', NoticeSchema);

export {Notice}