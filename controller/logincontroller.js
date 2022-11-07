function getLogin(req,res,next){
    res.render("index",{
        tirle:"Login-Chat Application",

    });

}
module.exports={
    getLogin,
}