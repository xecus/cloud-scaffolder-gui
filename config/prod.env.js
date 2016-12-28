require('dotenv').config()
module.exports = {
  NODE_ENV: '"production"',
  DB_HOST: '"' + process.env.DB_HOST +'"'
}
