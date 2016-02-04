require('dotenv').load()

exports.mongodbUrl = process.env.MONGODB_URL
delete process.env.MONGODB_URL

exports.sessionSecret = process.env.SESSION_SECRET || 'dev-session-secret-62049487784'
delete process.env.SESSION_SECRET
