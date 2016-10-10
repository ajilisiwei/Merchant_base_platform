/* GET users listing. */
var userBll=require('../bll/userBll');
exports.user=function (req,res) {
    res.send('respond with a resource');
};

//login view
exports.login=function (req,res) {
    res.render('./user/login');
};

//sign in
exports.sign_in=function (req,res) {
    var username=req.body.username;
    var password=req.body.password;
    if (username==='wei@126.com' && password==='wei'){
        // res.redirect('/');
        res.send(JSON.stringify({msg:'true'}));
    }
    else
        res.send(JSON.stringify({msg:'error'}));
};

//register
exports.register=function (req,res) {
    res.render('./user/register');
};

exports.sign_up=function (req,res) {
    console.log(req.body.user);
    var _user=JSON.parse(req.body.user);
    userBll.register(_user,(result)=>{
        if(result.userNameExist) res.send(JSON.stringify({userNameExist:'true'}));
        else if (result.success) res.send(JSON.stringify({success:'true'}));
        else res.send(JSON.stringify({error:'true'}));
    });
};