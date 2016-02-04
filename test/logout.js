var async = require('async')
var assert = require('chai').assert
var request = require('supertest-session')(require('../app'))
var validNewUser = require('./valid-new-user')

describe('logout', function () {
  it('should clear session cookie', function (done) {
    async.series([
      function register (callback) {
        // register a new user for this test
        // basic assert that it worked
      },
      function home1 (callback) {
        // load the home page
        // assert the page contains the "logged in as" message
      },
      function logout (callback) {
        // log out
        // basic assert that it worked
      },
      function home2 (callback) {
        // load the home page
        // assert the page contains the login form
      }
    ], done)
  })
})
