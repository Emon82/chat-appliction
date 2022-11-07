const express=require("express");


//internal import
const {getInbox}=require("../controller/inboxcontroller");

const router = express.Router();

//login page
router.get("/",getInbox);
module.exports=router;