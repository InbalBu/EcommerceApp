const router =require("express").Router();
const loginUser=require("../controllers/loginUser.js");
router.post("/",loginUser);
module.exports=router;