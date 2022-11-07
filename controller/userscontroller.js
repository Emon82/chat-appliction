function getUser(req,res,next){
    res.render("users",{
        tirle:"Login-Chat Application",

    });

}
module.exports={
    getUser
}