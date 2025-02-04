const Sequelize = require('sequelize');

require('dotenv').config();

//trying to push to heroku
// create connection to our db 
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        socketPath: '/tmp/mysql.sock'
      },
      port: 3306,
    },
  );
}
module.exports = sequelize;