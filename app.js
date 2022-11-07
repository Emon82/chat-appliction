const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const { cookie } = require("express-validator");
const cookieParser = require("cookie-parser");
const loginRouter=require("./router/loginRouter")
const userRouter=require("./router/userRouter")
const inboxRouter=require("./router/inboxRoute")

//internal imports

const{notFoundHandler,errorHandler}=require("./middleware/common/errorhandelor");

const app=express();
dotenv.config();


//database connection
mongoose
.connect(process.env.MONGO_CONNECTION_STRING,{
    useNewUrlparser: true,
    useUnifiedTopology:true,
})
.then(()=>console.log ("daatbase connection successful "))
.catch(err=> console.log(err));

//requst proses
app.use(express.json());
app.use (express.urlencoded({extended:true}));

//set view agency
app.set ('view engine',"ejs");

//set static folder
app.use(express.static(path.join(__dirname,"public")));
//prose cookie
app.use(cookieParser(process.env.COOKIE_SERTE));
//routing setup
app.use('/',loginRouter);
app.use('/users',userRouter);
app.use('/inbox',inboxRouter);

//404 not fond handler
app.use(notFoundHandler);


//common errror handler
app.use(errorHandler);


app.listen(process.env.PORT,()=>{
    console.log(`app listen to port ${process.env.PORT}`);
}
);
