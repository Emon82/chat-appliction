const express=require("express");


//internal import
const {getUser}=require("../controller/userscontroller");

const router = express.Router();

//login page
router.get("/",getUser);

module.exports=router;