// version control scheme
// use production keys in prod env, development keys in dev env
if (process.env.NODE_ENV === 'production') {
  // execute these keys in production environment
  module.exports = require('./prod')
} else {
  // execute these keys in development environment
  module.exports = require('./dev')
}
