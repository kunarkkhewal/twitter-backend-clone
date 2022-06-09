/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "ec2-54-165-178-178.compute-1.amazonaws.com",
      port: 5432,
      user: "byzcuiyvqnyenk",
      password: "33fc5dce796936bdda20a6f3232ae6abc7882f679d353b060743f5bc2efbcc9b",
      database: "d71u589rgqlg8u",
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "migrations",
    },
  },
};
