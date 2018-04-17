const TABLE_NAME = 'instructors_cohorts'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('instructors_id').references('instructors.id').notNullable()
    table.integer('cohorts_id').references('cohorts.id').notNullable()
    // table.primary(['instructors_id', 'cohorts_id'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
