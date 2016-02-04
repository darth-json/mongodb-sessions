var ObjectId = require('mongodb').ObjectId

function validNewUser () {
  return {
    email: new ObjectId() + '@example.com',
    password: 'password'
  }
}

module.exports = validNewUser
