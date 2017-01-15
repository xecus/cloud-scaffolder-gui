require('dotenv').config()
module.exports = {
  NODE_ENV: '"production"',
  SITE_TITLE: '"' + process.env.SITE_TITLE +'"',
  SSO_HOST: '"' + process.env.SSO_HOST +'"',
  WS_HOST: '"' + process.env.WS_HOST +'"'
}
