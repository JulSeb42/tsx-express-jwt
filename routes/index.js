/*=============================================== All routes ===============================================*/

const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.json("All good in here")
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
const auth = require("./auth")
router.use("/auth", auth)

const users = require("./users")
router.use("/users", users)

const uploader = require("./uploader")
router.use("/uploader", uploader)

module.exports = router
