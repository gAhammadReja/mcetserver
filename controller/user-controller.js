import {Teachers , Enrolls, Student , Notice } from "../schema/user-schema.js";


export const getTeachers = async (request, response) => {
    try {
        const allTeachers = await Teachers.find();
        response.status(200).json(allTeachers);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}
export const deleteTeacher = async (req, res) => {
    try {
        await Teachers.deleteOne({ _id: req.body.id })
        res.status(201).json('success')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTeachersData = async (req, res) => {
    try {
        const data = await Teachers.findById({ _id: req.body.id })
        res.json(data)
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}
export const updatetUsers = async (req, res) => {
    try {
        await Teachers.updateMany({ _id: req.body._id }, {
            $set: {
                staffName: req.body.staffName,
                userId: req.body.userId,
                // mail: req.body.mail,
                // dob: req.body.dob,
                // gender: req.body.gender,
                // rel: req.body.rel,
                // address: req.body.address,
                // adate: req.body.adate,
                // class: req.body.class,
                // roll: req.body.roll,
            }
        })
        res.status(201).json('successfully updated')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



//student controll
export const getAllStudent = async (request, response) => {
    try {
        const allStudents = await Student.find();
        response.status(200).json(allStudents);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}
export const deleteStudent = async (req, res) => {
    try {
        await Student.deleteOne({ _id: req.body.id })
        res.status(201).json('success')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




//enrollnew controll

export const getNewEnroll = async (request, response) => {
    try {
        const allNewEnroll = await Enrolls.find();
        response.status(200).json(allNewEnroll);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}




export const getNotice = async (request, response) => {
    try {
        const getAllNotice = await Notice.find();
        response.status(200).json(getAllNotice);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

export const getStd = async (request, response) => {
    try {
        const data = await Student.findById({ _id: req.body.id })
        response.status(200).json(data);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}
export const updatetStd = async (req, res) => {
    try {
        await Student.updateMany({ _id: req.body.id }, {
            $set: {
                studentName: req.body.studentName,
                mobile: req.body.uRoll,
                stream: req.body.stream,
                year: req.body.year,
                feesPaid: req.body.feesPaid,
                courseFee: req.body.courseFee,
            }
        })
        res.status(201).json('successfully updated')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
