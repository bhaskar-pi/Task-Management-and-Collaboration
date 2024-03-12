const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    businessId: {type: String, required: true},
    businessName: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true}
},
{
    collection: 'user-data'
})

const User = mongoose.model('user-data', userSchema)

module.exports =  {User}