/*=============================================== Sendmail function ===============================================*/

const transporter = require("./transporter")

const sendMail = (to, subject, html) => {
    let mailDetails = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        html: html,
    }

    transporter.sendMail(mailDetails, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Email sent successfully.")
        }
    })
}

module.exports = sendMail
