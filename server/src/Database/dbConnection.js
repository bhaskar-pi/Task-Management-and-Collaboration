const mongoose = require("mongoose")
const {DBConnectionUrl} = require('../constants')

const connectToDataBase = async() => {
    try {
        await mongoose.connect(DBConnectionUrl)
        console.info('MongoDB Connected')
    } catch (error) {
        console.error('Error in DB Connection', error)
    }
}

module.exports = {connectToDataBase}