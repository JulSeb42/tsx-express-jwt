const router = require("express").Router()

const { isAuthenticated } = require("../middleware/jwt.middleware")

router.get("/", (req, res, next) => {
    res.json("All good in here")
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
const auth = require("./auth")
router.use("/auth", auth)

const users = require("./users")
router.use("/users", users)

module.exports = router
