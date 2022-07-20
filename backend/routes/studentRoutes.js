const express = require('express')
const router = express.Router()
const { getStudents, getStudent, addStudent, editStudent, deleteStudent} = require('../controllers/studentController');
const {protect, checkAccess} = require('../middleware/authMiddleware')

router.get('/', protect, checkAccess(["admin", "basic"]), getStudents)
router.get('/:id', protect, checkAccess(["admin", "basic"]), getStudent)
router.post('/', protect, checkAccess(["admin", "basic"]), addStudent)
router.put('/:id', protect, checkAccess(["admin", "basic"]), editStudent)
router.delete('/:id', protect, checkAccess(["admin", "basic"]), deleteStudent)


module.exports = router