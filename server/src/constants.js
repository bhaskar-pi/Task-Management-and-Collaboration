const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT
const DBConnectionUrl = process.env.DB_CONNECTION_URL

module.exports = {port, DBConnectionUrl}