const express = require('express')
const {port} = require('./src/constants.js')
const {connectToDataBase} = require('./src/database/dbConnection.js')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./src/routes/user.routes.js')

const app = express()
app.use(express.json());
app.use(cors({
    credentials: true, origin: ['http://localhost:3000']
}))
app.use(cookieParser())

connectToDataBase()

app.use('/', router)

app.listen(port, () => {
    console.log("Server is running on port", port)
})