const {User,validate} = require("../models/user");
const bcrypt =require("bcrypt");

module.exports=async(req,res)=>
{
 try {
    const {error} = validate(req.body);
    if (error) return res.status(400).send({message: error.details[0].message});
    
    const user = await User.findOne({email: req.body.email});
    if (user) res.status(400).send({message: "User already exists"});
    
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword= await bcrypt.hash(req.body.password,salt);

    const newUser = await new User({...req.body,password:hashPassword}).save();
    res.status(200).send({message: "Successfully registered!",newUser});
        
 } catch (error) {
    res.status(500).send({message: error.message});
    
 }
}