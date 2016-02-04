var request = require('supertest')(require('../app'))
var urlPath = '/api/login'
var assert = require('chai').assert
var validNewUser = require('./valid-new-user')

describe('user login', function () {
  var user = validNewUser()
  before(function (done) {
    // Register a user account so we can log in with it
    request.post('/api/users')
      .send(user)
      .expect(201)
      .end(done)
  })

  it('should reject incorrect password', function (done) {
    assert.equals(0,1);
    done();
  })

  it('should reject incorrect email', function (done) {
    assert.equals(0,1);
    done();
  })

  it('should accept valid credentials', function (done) {
    assert.equals(0,1);
    done();
  })
})
