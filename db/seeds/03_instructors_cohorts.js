const TABLE_NAME = 'instructors_cohorts'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, instructors_id: 1, cohorts_id: 1},
        {id: 2, instructors_id: 2, cohorts_id: 2},
        {id: 3, instructors_id: 3, cohorts_id: 3},
        {id: 4, instructors_id: 4, cohorts_id: 4}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
