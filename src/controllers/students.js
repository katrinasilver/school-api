const model = require('../models/students')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
const getAll = (req, res, next) => {
  model.getAll()
  .then((data) => res.status(200).send({ data }))
  .catch(next)
}

const getOne = (req, res, next) => {
  model.getOne(+(req.params.studentId))
  .then((data) => {
    if (data) return res.status(200).send({ data })
    else throw { status: 404, message: `Student Not Found`}
  })
  .catch(next)
}

const create = (req, res, next) => {
  if (!req.body.name && !req.body.cohorts_id)
    return next({ status: 400, message: 'Bad Request' })

  model.create(req.body.name, req.body.cohorts_id)
  .then(data => res.status(201).send({ data }))
  .catch(next)
}

const remove = (req, res, next) => {
  model.remove(req.params.studentId)
  .then(data => {
    res.status(200).send({ data })
    })
  .catch(next)
}

//////////////////////////////////////////////////////////////////////////////
// Nested CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function getAllInstructors(req, res, next){
  model.getAllInstructors(parseInt(req.params.studentId))
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}

//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

function checkIfStudentExists(req, res, next){
  model.getOne(parseInt(req.params.studentId))
  .then(function(data){
    if(!data) next({ status: 404, message: 'Student Not Found' })
    next()
  })
}

module.exports = {
  remove,
  create,
  getOne,
  getAll,
  getAllInstructors,
  checkIfStudentExists
}
