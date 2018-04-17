const express = require('express')
const router = express.Router()
const studentsController = require('../controllers/students')

// router.get('/', studentsController.getAll)
// router.get('/:studentId', studentsController.getOne)
// router.post('/', studentsController.create)
// router.put('/:studentId', studentsController.update)
// router.delete('/:studentId', studentsController.remove)

router.get('/:studentId/instructors',
            studentsController.checkIfStudentExists,
            studentsController.getAllInstructors)



module.exports = router
