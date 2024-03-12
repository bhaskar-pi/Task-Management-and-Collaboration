const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT
const DBConnectionUrl = process.env.DB_CONNECTION_URL

const accessTokenKey = process.env.ACCESS_TOKEN_KEY
const refreshTokenKey = process.env.REFRESH_TOKEN_KEY

module.exports = {port, DBConnectionUrl, accessTokenKey, refreshTokenKey}