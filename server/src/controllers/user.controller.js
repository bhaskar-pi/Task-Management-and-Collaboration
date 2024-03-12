const {User} = require('../database/user.model')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')
const {accessTokenKey, refreshTokenKey} = require('../constants')
const jwt = require('jsonwebtoken')

const registerUser = async (request, response) => {
    const {username, email, password, businessName, role} = request.body

    try {
        const existedBusiness = await User.findOne({businessName})
        const hashedPassword = await bcrypt.hash(password, 10)

        if (!existedBusiness){
            await User.create({
                username,
                email,
                password: hashedPassword,
                businessName,
                role,
                businessId: uuidv4()
            })
            return response.status(200).send('Registered Successfully.')
        }else{
            return response.status(400).send('Business/Email is already exits.')
        }  
    } catch (error) {
        console.log("error in registerUser", error)
        response.status(500).send('Internal server error')
    }
}

const loginUser = async(request, response) => {
    const {email, password} = request.body

    try {
        const user = await User.findOne({email})
        console.log({user})
        const isPasswordMatched = await bcrypt.compare(password, user.password)

        console.log({isPasswordMatched, password}, user.password)

        if (!user){
            response.status(400).send('User not existed.')
        }else if (!isPasswordMatched){
            response.status(400).send('Invalid credentials.')
        }else {
            const payload = {
                email: user.email
            }
            const accessToken = jwt.sign(
                payload, accessTokenKey,{ expiresIn: '1m' }
            )
            const refreshToken = jwt.sign(
                payload, refreshTokenKey, { expiresIn: '5m' }
            )
            response.cookie('accessToken', accessToken, {maxAge: 60000})
            response.cookie('refreshToken', refreshToken, {maxAge: 300000})
            response.json({login: true, message: 'Login Successful'})
        }

    } catch (error) {
        console.log("error in loginUser", error)
        response.status(500).send('Internal server error')
    }
}

const getDashboard = async (request, response) => {
    try {
        let userEmail;

        if (!request.email) {
            // Try to extract email from the refresh token if available
            userEmail = await extractEmailFromRefreshToken(request.cookies.refreshToken);

            if (!userEmail) {
                return response.status(401).json({ isAuthorized: false, message: 'Unauthorized' });
            }
        } else {
            userEmail = request.email;
        }

        const user = await User.findOne({ email: userEmail });

        if (!user) {
            return response.status(404).json({ error: 'User not found' });
        }

        console.log({ user });
        return response.json({ isAuthorized: true, user });
    } catch (error) {
        console.log('error in getDashboard', error);
        response.status(500).send('Internal server error');
    }
};

const extractEmailFromRefreshToken = async (refreshToken) => {
    return new Promise((resolve) => {
        jwt.verify(refreshToken, refreshTokenKey, (error, decode) => {
            if (!error && decode && decode.email) {
                resolve(decode.email);
            } else {
                resolve(null);
            }
        });
    });
};


module.exports = {getDashboard, loginUser, registerUser}