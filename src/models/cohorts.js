const db = require('../../db')

function getOne(cohortId){
  return db('cohorts').where({ id: cohortId }).first()
}

function getAllStudents(cohortId){
  return (
    db('cohorts')
    .select('cohorts.id as cohorts_id',
            'cohorts.name as cohorts_name',
            'students.id as students_id',
            'students.name as students_name')
    .join('students', 'students.cohorts_id', 'cohorts.id')
    .where('cohorts.id', cohortId)
  )
}

function getAllInstructors(cohortId){
  return (
    db('cohorts')
    .select('instructors.id as instructors_id',
            'instructors.name as instructors_name',
            'cohorts.id as cohorts_id',
            'cohorts.name as cohorts_name')
    .join('instructors_cohorts', 'instructors_cohorts.cohorts_id', 'cohorts.id')
    .join('instructors', 'instructors.id', 'instructors_cohorts.instructors_id')
    .where('cohorts.id', cohortId)
  )
}

module.exports = {
  getOne,
  getAllStudents,
  getAllInstructors
}
