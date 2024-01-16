const mongoose = require("mongoose");


const signUpSchema = mongoose.Schema({
    name : {
        type: String,
         },
         email:{
            type: String,
         },
         password:{
            type : String,
  
        }     
})


const User = mongoose.model("user", signUpSchema);

module.exports = User;