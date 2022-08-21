/*=============================================== User model ===============================================*/

const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: String,
        verified: Boolean,
        verifyToken: String,
        resetToken: String,
    },
    {
        timestamps: true,
    }
)

const User = model("User", userSchema)

module.exports = User
