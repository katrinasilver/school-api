const TABLE_NAME = 'students'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Gryffindor Student 1', cohorts_id: 1},
        {id: 2, name: 'Gryffindor Student 2', cohorts_id: 1},
        {id: 3, name: 'Hufflepuff Student 1', cohorts_id: 2},
        {id: 4, name: 'Hufflepuff Student 2', cohorts_id: 2},
        {id: 5, name: 'Ravenclaw Student 1', cohorts_id: 3},
        {id: 6, name: 'Ravenclaw Student 2', cohorts_id: 3},
        {id: 7, name: 'Slytherin Student 1', cohorts_id: 4},
        {id: 8, name: 'Slytherin Student 2', cohorts_id: 4},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
