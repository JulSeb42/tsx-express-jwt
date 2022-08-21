/*=============================================== Nodemailer config ===============================================*/

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.WORD,
    },
    port: process.env.PORT_SMTP,
})

module.exports = transporter
