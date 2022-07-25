const mongoose = require('mongoose');
const jwt =require("jsonwebtoken");

const userSchema = new mongoose.Schema({
     name: {type: String,unique:true},
     email: {type: String,unique:true},
    password: {type: String,unique:true },
});

userSchema.methods.generateAuthToken=function(){
    const token =jwt.sign({_id:this._id},"jwtSecret",{expiresIn:"7d"});
    return token;
}
const User= mongoose.model("user",userSchema);

const validate=(data)=>{
    const schema=Joi.object({
        Name:  Joi.string().required().label("First Name"),
        email:Joi.string().email().required().label("Email"),
        password:passwordComplexity().required().label("Password"),
  });
  return schema.validate(data)
}
module.exports={User,validate};

// module.exports = mongoose.model('user', userSchema);