const jwt = require('jsonwebtoken')
require("dotenv").config()

module.exports = (context) => {
    const authHeader = context.authorization
    if (authHeader) {
        const token = authHeader.split('Bearer ')[1]
        if (token) {
            try {
                const user = jwt.verify(token, process.env.JWTPRIVATEKEY)
                return user
            } catch {
                throw new Error("Token invalid ou expiré");
            }
        }
        throw new Error("Auth doit être 'Bearer [token]'");
    }
    throw new Error("Header Auth doit être fournit");
}



