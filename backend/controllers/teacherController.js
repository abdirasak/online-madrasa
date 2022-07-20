const asyncHandler = require('express-async-handler')
const Teacher = require('../models/teacherModel')

// @desc    Get all teachers details
// @route   GET /api/teachers 
// @access  Private
exports.getTeachers = asyncHandler(async(req, res) => {
    const teachers = await Teacher.find(req.query)
    res.status(200).json({count: teachers.length, data: teachers})
})

// @desc    Get single teacher details 
// @route   GET /api/:id
// @access  Private
exports.getTeacher = asyncHandler(async(req, res) => {
    const teacher = await Teacher.findById(req.params.id)
    res.status(200).json({data: teacher})
})

// @desc    Add teacher
// @route   POST /api/:id
// @access  Private
exports.addTeacher = asyncHandler(async(req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('Please add all fields')
      }
    
      const teacher = await Teacher.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tell: req.body.tell,
        address: {
          street: req.body.street,
          city: req.body.city,
          postCode: req.body.postCode
        }
      })
    
    res.status(200).json(teacher)
})

// @desc    Edit teacher by id
// @route   PUT /api/:id
// @access  Private
exports.editTeacher = asyncHandler(async(req, res) => {

    const teacher = await Teacher.findById(req.params.id)
    //check if teacher exist
    if (!teacher) {
      res.status(400)
      throw new Error('Student not found')
    }
  
  
    //update teacher
    const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    //send back the updated teacher
    res.status(200).json(updatedTeacher)
})

// @desc    Delete teacher by id
// @route   DELETE /api/:id
// @access  Private
exports.deleteTeacher = asyncHandler(async(req, res) => {
    const teacher = await Teacher.findById(req.params.id)

    //check if teacher exists 
    if (!teacher) {
      res.status(400)
      throw new Error('Student not found')
    }

    //remove teacher
    await teacher.remove()
    
    res.status(200).json({ id: req.params.id })
})

