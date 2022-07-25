const router =require("express").Router();
const registerUser=require("../controllers/registerUser.js");
router.post("/",registerUser);
module.exports=router;