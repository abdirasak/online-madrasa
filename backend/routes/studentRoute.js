const express = require('express')
const router = express.Router()
const { getStudents, getStudent, addStudent, editStudent, deleteStudent} = require('../controllers/studentController');
// const {protect} = require('../middleware/authMiddleware')

router.get('/', getStudents)
router.get('/:id', getStudent)
router.post('/', addStudent)
router.put('/:id', editStudent)
router.delete('/:id', deleteStudent)


module.exports = router