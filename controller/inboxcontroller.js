function getInbox(req,res,next){
    res.render("inbox",{
        tirle:"Login-Chat Application",

    });

}
module.exports={
    getInbox,
}