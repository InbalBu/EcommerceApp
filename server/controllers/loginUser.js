<<<<<<< HEAD
const bcrypt =require("bcrypt");
=======
const bcrypt =require("bcryptjs");
>>>>>>> 5c25b9827f23b3325a9e7e7605fcc73850ad0148
const Joi= require("joi");
const{User}=require('../models/user')

module.exports=async(req,res)=> {
    try {
        const {error} = validate(req.body);
        if (error) return res.status(400).send({message: error.details[0].message});

        const user = await User.findOne({email: req.body.email});
        if (!user) return res.status(400).send({message: "Invalid email"});

        const validPassword = bcrypt.compare(req.body.password,user.password);
        if (!validPassword) return res.status(400).send({message: "Invalid password"});
        
        const token =user.generateAuthToken();

        res.status(200).send({message: "Successfully Logged!", data:token,user});
    }
    catch (error) { 
        res.status(500).send({message: error.message});

    }

}
const validate=(data)=>{
    
    const schema = Joi.object({
         email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password"),
        profilePicture:Joi.any().label("Picture"), 

    });
    return schema.validate(data);
}
