const model = require('../models/students')

function getAllInstructors(req, res, next){
  model.getAllInstructors(parseInt(req.params.studentId))
  .then(function(data){
    return res.status(200).send({ data })
  })
  .catch(next)
}


// Quality of Life functions
function checkIfStudentExists(req, res, next){
  model.getOne(parseInt(req.params.studentId))
  .then(function(data){
    if(!data) next({ status: 404, message: 'Cohort Not Found' })
    next()
  })
}

module.exports = {
  getAllInstructors,
  checkIfStudentExists
}
