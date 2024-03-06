const express = require('express')
const dotenv = require('dotenv')
const {port} = require('./src/constants.js')
const {connectToDataBase} = require('./src/Database/dbConnection.js')

const app = express()
app.use(express.json());

dotenv.config()
connectToDataBase()

app.get('/', (request, response) => {
    response.send('Hello World')
})

app.listen(port, () => {
    console.log("Server is running on port", port)
})