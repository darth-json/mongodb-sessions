# MongoDB Sessions

In this exercise, we'll build an express web application supporting user registration, log in, and log out. We will use mongodb as our data store and passport.js for our authentication library.


# Prereqs

- Make sure you have a valid mongodb running
- copy `.env.sample` to `.env`
- edit `.env` and set MONGODB_URL correctly

# Step 1: home page for new sessions

- edit `test/new-session.js` to test that the site does NOT set a cookie on the home page
- once you write the test, this should already pass
- write a test that the home page shows the login form
  - use the `cheerio` module to parse the response HTML and check for the `div.login` selector to be present
- make the test pass

# Step 2: Register a New User Account Back End

(This is a big step. Slow and steady!)

- Define a new mongoose schema for Users in `users/User.js`
- Just define the email and passwordHash fields
- implement just the setPassword method via `bcrypt-nodejs`
- add a new POST route for `/api/users` to `users/router.js`
- use `body-parser` to accept a JSON body
- create a user instance, set the password, and save a new user instance
- if successful, 201 status code and user JSON as body
- if error, 400 status code
- integrate the user router into the main app via `app.use()`
- in `app.js` call `mongoose.connect()` to connect properly to the database
- get all 4 of the stub tests implemented and passing in `test/register.js`


# Step 3: Register new account front end

- add a simple registration form to the home page index.ejs with
  - a div with class "login" enclosing the form elements
  - a text input for the email
  - a password input
  - a "register" button (we'll build "login" later)
- Add some very basic jquery to extract the email and password from the DOM and submit them to the server via `$.ajax` POST when the register button is clicked
- Confirm it works by filling in the form, clicking register, checking the network tab to see the req/res details in the chrome developer tools
- Use a GUI like MongoHub (or your `read.js` script from the mongodb-basics exercise) to confirm your account is recorded in mongodb

# Step 3: login back end

- install the myriad express and passport packages
  - [http://passportjs.org/docs/configure]()
- set them up according to the docs
- set up the passport LocalStrategy as per [http://passportjs.org/docs/username-password]()
- code a basic `passport.serializeUser`, and `passport.deserializeUser` in `users/router.js`
- in `app.js` make sure you are configuring and using
  - `connect-mongo` for mongodb session storage
  - `app.use` with `express-session`
    - get the `secret` setting from the `./config` module I provided
    - set `saveUninitialized: false`
    - set `resave: false`
    - make an instance of the `connect-mongo` `MongoStore` class as the session `store` option
  - then `app.use` with `passport.initialize()`
  - then `app.use` with `passport.session()`
- define a new POST /api/login route in the user router
- use a `body-parser` middleware to parse the request body for login fields
- use the `passport.authenticate('local')` middleware to handle the login
- in the final request handler, send `req.user` as the response body
- get the tests in `test/login.js` implemented and passing

# Step 4: login front end

- add a "login" button to the home page form
- update the `index.ejs` template to show the login form to anonymous users, but a message "You are signed in as <email>" if the user is signed in
- add some jquery to send the login POST via $.ajax
  - if it fails, show an error message above the form
  - if it succeeds, you will be logged in, so reload the page

# Step 5: logout

- Add a GET route for  `/api/logout` to the users router
  - get passport to process the logout
  - send back an empty 200 response
- Add a logout button to the index.ejs for logged-in users
- add the jquery to send the logout request and reload the page on success
- confirm the end to end UI workflow now works
  - anonymous home page
  - register a user
  - login
  - logout
