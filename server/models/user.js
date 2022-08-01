const mongoose = require('mongoose');
const jwt =require("jsonwebtoken");
const Joi = require('joi');
const userSchema = new mongoose.Schema({
     name: {type: String},
     email: {type: String,unique:true},
    password: {type: String,unique:true },
    profilePicture: {type: String,required:false},
});

userSchema.methods.generateAuthToken=function(){
    const token =jwt.sign({_id:this._id},"jwtSecret",{expiresIn:"7d"});
    return token;
}
const User= mongoose.model("user",userSchema);

const validate=(data)=>{
    const schema=Joi.object({
        name:  Joi.string().required().label(" Name"),
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password"),
        profilePicture:Joi.string().label("profilePicture")

  });
  return schema.validate(data)
}
module.exports={User,validate};

// module.exports = mongoose.model('user', userSchema);