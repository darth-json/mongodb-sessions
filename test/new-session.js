var request = require('supertest')(require('../app'))
var assert = require('chai').assert
var expect = require('chai').expect

describe('the home page', function () {
  it('should not set a cookie before login', function (done) {
    request.get('/').expect(200).expect().end((err, res) =>{
      expect(res.headers).to.not.have.property('set-cookie');
      done();
    });
  })

  it('should show login form', function (done) {
    assert.equals(0,1);
    done();
  })
})
 