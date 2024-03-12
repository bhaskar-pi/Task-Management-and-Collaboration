const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getDashboard} = require('../controllers/user.controller')
const {authenticateToken} = require('../controllers/Auth/auth')

// register user api 
router.post('/register', registerUser)

// user login api 
router.post('/login', loginUser)

// get dashboard
router.get('/dashboard', authenticateToken, getDashboard)

module.exports = router



