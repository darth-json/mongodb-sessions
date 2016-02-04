var request = require('supertest')(require('../app'))
var assert = require('chai').assert
var expect = require('chai').expect
var cheerio = require('cheerio');

describe('the home page', function () {
  it('should not set a cookie before login', function (done) {
    request.get('/').expect(200).end((err, res) =>{
      expect(res.headers).to.not.have.property('set-cookie');
      done();
    });
  })

  it('should show login form', function (done) {
    request.get('/').expect(200).end((err, res) =>{
      var $ = cheerio.load(res.text);
      var html = $('div.login').html()
      console.log(html);
      expect(html).not.to.be.null;
      done();
    });
  })
})
 