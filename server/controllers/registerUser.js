const {User,validate} = require("../models/user");
<<<<<<< HEAD
const bcrypt =require("bcrypt");
=======
const bcrypt =require("bcryptjs");
>>>>>>> 5c25b9827f23b3325a9e7e7605fcc73850ad0148

module.exports=async(req,res)=>
{
 try {
    const {error} = validate(req.body);
    if (error) return res.status(400).send({message: error.details[0].message});
    
    const user = await User.findOne({email: req.body.email});
    if (user) return res.status(400).send({message: "User already exists"});
    
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword= await bcrypt.hash(req.body.password,salt);

    const newUser = await new User({...req.body,password:hashPassword}).save();
    res.status(200).send({message: "Successfully registered!",newUser});
        
 } catch (error) {
    res.status(500).send({message: error.message});
    
 }
}