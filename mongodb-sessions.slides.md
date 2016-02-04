# mongodb sessions

- [express-session](https://github.com/expressjs/session) is the main express session management package
- session cookie is a sha256 hmac with cookie value and secret key
  - client side tampering will be detected

Note:
- [Authentication with Passport and Express 4](http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/)
- [express session cookie hmac details](https://github.com/tj/node-cookie-signature/blob/391b56cf44d88c493491b7e3fc53208cfb976d2a/index.js#L16)



# npm packages

- `supertest` for sending requests to the back end, verifying responses
- `jquery` for our no-frills front end
