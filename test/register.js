var assert = require('chai').assert
var request = require('supertest')(require('../app'))
var urlPath = '/api/users'
var validNewUser = require('./valid-new-user')

describe('new user registration', function () {
  it('should require email', function (done) {

  })

  it('should require password', function (done) {

  })

  it('should require password at least 4 characters', function (done) {

  })

  it('should work with 201', function (done) {

  })

  it('should detect duplicate registration attempts', function (done) {

  })
})
