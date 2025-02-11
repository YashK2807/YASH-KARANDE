const mongoose = require("../config/dbConfig");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    profilePic : {
        type : String,
        required : false
    }
},{
    timestamps : true
});
const User = mongoose.model("User", userSchema);
module.exports = User;
