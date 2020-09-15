exports.up = function (knex) {
  return knex.schema.createTable('diffusers', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('size')
    table.integer('price')
    table.string('lifespan')
    table.string('img')
    table.string('details')
    table.boolean('inCart')
    table.integer('count')
    table.integer('total')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('diffusers')
}
