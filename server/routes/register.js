const router =require("express").Router();
const{User,validate}=require('../models/user')
const registerUser=require("../controllers/registerUser.js");
router.post("/",registerUser);
module.exports=router;