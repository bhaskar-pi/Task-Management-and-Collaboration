const jwt = require('jsonwebtoken')
const {accessTokenKey, refreshTokenKey} = require('../../constants')


const authenticateToken = (request, response, next) => {
    const accessToken = request.cookies.accessToken;
    
    if (!accessToken) {
        if (renewToken(request, response)){
            next()
        }
    } else {
        jwt.verify(accessToken, accessTokenKey, (error, decode) => {
            if (error) {
                response.json({ isAuthorized: false, message: 'Invalid access token' });
            } else {
                request.email = decode.email;
                next();
            }
        });
    }
}

const renewToken = (request, response) => {
    const refreshToken = request.cookies.refreshToken;
    let exist = false

    if (!refreshToken) {
        response.json({ isAuthorized: false, message: 'No refresh token' });
    } else {
        jwt.verify(refreshToken, refreshTokenKey, (error, decode) => {
            if (error) {
                response.json({ isAuthorized: false, message: 'Invalid refresh token' });
            } else {
                const accessToken = jwt.sign({ email: decode.email }, accessTokenKey, { expiresIn: '1m' });
                response.cookie('accessToken', accessToken, { maxAge: 60000 });
                exist = true
            }
        });
    }

    return exist
}


module.exports = {authenticateToken}