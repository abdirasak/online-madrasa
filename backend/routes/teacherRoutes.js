const express = require('express')
const router = express.Router()
const { getTeachers, getTeacher, addTeacher, editTeacher, deleteTeacher} = require('../controllers/teacherController');
const {protect, checkAccess} = require('../middleware/authMiddleware')

router.get('/', protect, checkAccess(["admin"]), getTeachers)
router.get('/:id', protect, checkAccess(["admin"]), getTeacher)
router.post('/', protect, checkAccess(["admin",]), addTeacher)
router.put('/:id', protect, checkAccess(["admin"]), editTeacher)
router.delete('/:id', protect, checkAccess(["admin"]), deleteTeacher)


module.exports = router