const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token) {
            return res.status(401).json({message: "Auth Failed"})
        }
        const decoded = jwt.verify(token, 'secret')
        req.userData = decoded
        next()
    
}catch(error) {
        res.status(401).json({
            message: "Auth Failed"
        })
    }
}

module.exports = authMiddleware;