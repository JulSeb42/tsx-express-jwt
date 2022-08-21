/*=============================================== Consts ===============================================*/

const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://localhost/tsx-express-jwt"

module.exports = MONGO_URI
