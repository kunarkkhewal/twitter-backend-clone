/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        .createTable('users', table => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('username').notNullable().unique();
            table.string('password').notNullable();
            table.string('location').notNullable();
            table.timestamps(true, true);
        })
        .createTable('tweets', table => {
            table.increments('id').primary();
            table.integer('userid').references('id').inTable('users');
            table.string('content').notNullable();
            table.timestamps(true, true);
        })
        .createTable('followings', table => {
            table.increments('id').primary();
            table.integer('follower').references('id').inTable('users');
            table.integer('following').references('id').inTable('users');
            table.timestamps(true, true);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('tweets')
        .dropTableIfExists('followings')
};
