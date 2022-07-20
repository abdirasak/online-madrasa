const asyncHandler = require('express-async-handler')
const Student = require('../models/studentModel')

// @desc    Get all students details
// @route   GET /api/students 
// @access  Private
exports.getStudents = asyncHandler(async(req, res) => {
    const students = await Student.find(req.query)
    res.status(200).json({count: students.length, data: students})
})

// @desc    Get single student details 
// @route   GET /api/:id
// @access  Private
exports.getStudent = asyncHandler(async(req, res) => {
    const singStudent = await Student.findById(req.params.id)
    res.status(200).json({data: singStudent})
})

// @desc    Add student 
// @route   POST /api/:id
// @access  Private
exports.addStudent = asyncHandler(async(req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add all fields')
      }
    
      const student = await Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tell: req.body.tell,
        zoomLink: req.body.zoomLink
      })
    
    res.status(200).json(student)
})

// @desc    Edit student by id
// @route   PUT /api/:id
// @access  Private
exports.editStudent = asyncHandler(async(req, res) => {

    const student = await Student.findById(req.params.id)
    //check if student exist
    if (!student) {
      res.status(400)
      throw new Error('Student not found')
    }
  
  
    //update student
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    //send back the updated student
    res.status(200).json(updatedStudent)
})

// @desc    Delete student by id
// @route   DELETE /api/:id
// @access  Private
exports.deleteStudent = asyncHandler(async(req, res) => {
    const student = await Student.findById(req.params.id)

    //check if student exists 
    if (!student) {
      res.status(400)
      throw new Error('Student not found')
    }

    //remove student 
    await student.remove()
    
    res.status(200).json({ id: req.params.id })
})

