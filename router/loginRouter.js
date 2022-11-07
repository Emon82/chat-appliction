const express=require("express");


//internal import
const {getLogin}=require("../controller/logincontroller");

const router = express.Router();

//login page
router.get("/",getLogin);
module.exports=router;