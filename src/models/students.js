const db = require('../../db')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
const getAll = () => db('students')

const getOne = (studentId) =>
  db('students').where({ id: studentId }).first()

const create = (name, cohorts_id) => {
  return (
    db('students')
    .insert({ name, cohorts_id })
    .returning('*') // returns All the columns of the thing we're inserting
    .then(([ data ]) => data) // same as (data) => data[0]
  )
}

const update = (studentId, name) => {
  return (
    db('students')
    .update({ name})
    .where({ id: studentId })
    .returning('*')
    .then(data => data[0])
  )
}

const remove = (studentId) => {
  return (
    db('students')
    .del()
    .where({ id: studentId})
    .returning('*')
    .then(([data]) => {
      delete data.id
      return data
    })
  )
}

//////////////////////////////////////////////////////////////////////////////
// Nested CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function getAllInstructors(studentId){
  return (
    db('students')
    .select('instructors.id as instructors_id',
            'instructors.name as instructors_name',
            'cohorts.id as cohorts_id',
            'cohorts.name as cohorts_name')
    .join('cohorts', 'cohorts.id', 'students.cohorts_id')
    .join('instructors_cohorts', 'instructors_cohorts.cohorts_id', 'cohorts.id')
    .join('instructors', 'instructors.id', 'instructors_cohorts.instructors_id')
    .where('students.id', studentId)
  )
}

module.exports = {
  update,
  remove,
  create,
  getOne,
  getAll,
  getAllInstructors
}
