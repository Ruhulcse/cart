const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        FirstName: {
            type: String
        },
        LastName: {
            type: String
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;