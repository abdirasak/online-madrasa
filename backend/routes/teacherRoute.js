const express = require('express')
const router = express.Router()
const { getTeachers, getTeacher, addTeacher, editTeacher, deleteTeacher} = require('../controllers/teacherController');
// const {protect} = require('../middleware/authMiddleware')

router.get('/', getTeachers)
router.get('/:id', getTeacher)
router.post('/', addTeacher)
router.put('/:id', editTeacher)
router.delete('/:id', deleteTeacher)


module.exports = router