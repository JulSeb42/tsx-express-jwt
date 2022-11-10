/*=============================================== User model ===============================================*/

import { Schema, model } from "mongoose"

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
        imageUrl: String,
    },
    {
        timestamps: true,
    }
)

const User = model("User", userSchema)

export default User
