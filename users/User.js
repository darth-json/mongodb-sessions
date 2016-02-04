var mongoose = require('mongoose')

var schema = mongoose.Schema({
  // define an email property with type String
  //  make sure it is required
  // do some basic regex validation (simplest possible)
  // add a unique index

  // define a passwordHash property with type String
  // make sure it is required
  // tell mongoose not to select it by default
}
})
schema.methods.setPassword = function setPassword (clear, callback) {
  // return a promise
  // validate the password is at least 4 chars
  // hash via bcrypt.hash(clear, null, null, callback)
  // store the hash in the passwordHash attribute
  // resolve the promise with this mongoose User instance
}

schema.methods.checkPassword = function checkPassword (clear, callback) {
  // return a promise
  // validate the provided cleartext password matches the hash in the db
  // resolve with true/false accordinly
  // reject if there is an error
}

module.exports = mongoose.model('User', schema)
