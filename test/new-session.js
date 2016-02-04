var request = require('supertest')(require('../app'))
var assert = require('chai').assert

describe('the home page', function () {
  it('should not set a cookie before login', function (done) {
    /**
     * - edit `test/new-session.js` to test that the site does NOT set a cookie on the home page
     * - once you write the test, this should already pass
     * - write a test that the home page shows the login form
     * - use the `cheerio` module to parse the response HTML and check for the `div.login` selector to be present
     * - make the test pass
     */
    request.get('/').expect(200).end((err, res) =>{
      console.log(JSON.stringify(res));
      done();
    });
  })

  it('should show login form', function (done) {

  })
})
