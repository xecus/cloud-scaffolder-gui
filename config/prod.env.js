require('dotenv').config()
module.exports = {
  NODE_ENV: '"production"',
  SSO_HOST: '"' + process.env.SSO_HOST +'"',
  SITE_TITLE: '"' + process.env.SITE_TITLE +'"'
}
