const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    FirstName: {
        type: "String"
    },
    LastName: {
        type: "String"
    },
    Email: {
        type: "String"
    },
    Password: {
        type: "String"
    }
})

module.exports = mongoose.model("userInfo", userSchema);