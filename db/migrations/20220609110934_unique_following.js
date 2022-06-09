/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.alterTable("followings", (table) => {
    table.unique(["follower", "following"], {
      indexName: "unique_following",
      useConstraint: true,
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.alterTable("followings", (table) => {
    table.dropUnique([], "unique_following");
  });
};
