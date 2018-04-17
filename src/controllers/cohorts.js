const model = require('../models/cohorts')


function getAllStudents(req, res, next){
  model.getAllStudents(parseInt(req.params.cohortId))
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}


function getAllInstructors(req, res, next){
  model.getAllInstructors(parseInt(req.params.cohortId))
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}


// Quality of Life functions
function checkIfCohortExists(req, res, next){
  model.getOne(parseInt(req.params.cohortId))
  .then(function(data){
    if(!data) next({ status: 404, message: 'Cohort Not Found' })
    next()
  })
}

module.exports = {
  getAllStudents,
  getAllInstructors,
  checkIfCohortExists
}
