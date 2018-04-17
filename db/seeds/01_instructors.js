const TABLE_NAME = 'instructors'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Godric Gryffindor'},
        {id: 2, name: 'Helga Hufflepuff'},
        {id: 3, name: 'Rowena Ravenclaw'},
        {id: 4, name: 'Salazar Slytherin'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
