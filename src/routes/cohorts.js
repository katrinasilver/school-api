const express = require('express')
const router = express.Router()
const cohortsController = require('../controllers/cohorts')
const instructorsController = require('../controllers/instructors')

// router.get('/', cohortsController.getAll)
// router.get('/:cohortId', cohortsController.getOne)
// router.post('/', studentsController.create)
// router.put('/:cohortId', studentsController.update)
// router.delete('/:cohortId', studentsController.remove)

router.get('/:cohortId/students',
            cohortsController.checkIfCohortExists,
            cohortsController.getAllStudents)

router.get('/:cohortId/instructors',
            cohortsController.checkIfCohortExists,
            cohortsController.getAllInstructors)

router.put('/:cohortId/instructors/:instructorId',
            cohortsController.checkIfCohortExists,
            instructorsController.checkIfInstructorExists,
            instructorsController.addInstructorToCohort)

router.delete('/:cohortId/instructors/:instructorId',
              cohortsController.checkIfCohortExists,
              instructorsController.checkIfInstructorExists,
              instructorsController.deleteInstructorFromCohort)

module.exports = router
