const env = {
  database: 'eventserver',
  username: 'eventuser',
  password: 'eventuser123',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
port:5432
};

module.exports = env;
