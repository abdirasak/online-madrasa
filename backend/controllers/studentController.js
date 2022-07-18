// @desc    Get all students details
// @route   GET /api/students 
// @access  Private
exports.getStudents = async(req, res) => {
   
  res.status(200).json({msg: 'Student List'})
}

// @desc    Get single student details 
// @route   GET /api/:id
// @access  Private
exports.getStudent = async(req, res) => {
    res.status(200).json({msg: `Get student ${req.params.id}`})
}

// @desc    Add student 
// @route   POST /api/:id
// @access  Private
exports.addStudent = async(req, res) => {
    res.status(200).json({msg: 'Add student'})
}

// @desc    Edit student by id
// @route   PUT /api/:id
// @access  Private
exports.editStudent = async(req, res) => {
    res.status(200).json({msg: `Update student ${req.params.id}`})
}

// @desc    Delete student by id
// @route   DELETE /api/:id
// @access  Private
exports.deleteStudent = async(req, res) => {
    res.status(200).json({msg: `Delete student ${req.params.id}`})
}

