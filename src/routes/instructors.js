const express = require('express')
const router = express.Router()
const instructorsController = require('../controllers/instructors')
const cohortsController = require('../controllers/cohorts')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.get('/', instructorsController.getAll)

router.get('/:instructorId', instructorsController.getOne)

router.post('/', instructorsController.create)

router.put('/:instructorId',
            instructorsController.checkIfInstructorExists,
            instructorsController.update)

router.delete('/:instructorId',
            instructorsController.checkIfInstructorExists,
            instructorsController.remove)

//////////////////////////////////////////////////////////////////////////////
// Nested CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.get('/:instructorId/cohorts',
            instructorsController.checkIfInstructorExists,
            instructorsController.getAllCohorts)

router.put('/:instructorId/cohorts/:cohortId',
            instructorsController.checkIfInstructorExists,
            cohortsController.checkIfCohortExists,
            instructorsController.addInstructorToCohort)

router.delete('/:instructorId/cohorts/:cohortId',
            instructorsController.checkIfInstructorExists,
            cohortsController.checkIfCohortExists,
            instructorsController.deleteInstructorFromCohort)

router.get('/:instructorId/students',
            instructorsController.checkIfInstructorExists,
            instructorsController.getAllStudents)

module.exports = router
