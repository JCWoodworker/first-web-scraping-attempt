/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("projects", (t) => {
    t.bigInteger('id')
    t.string('name')
    t.string('description')
    t.string('language')
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("projects")
}
