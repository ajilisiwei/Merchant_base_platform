/* GET users listing. */
var usermodel=require('../modules/userModel');
var user=new usermodel({
    name:'ajilisiwei',
    password:'wei',
});

exports.user=function (req,res) {
    res.send('respond with a resource');
};

//login view
exports.login=function (req,res) {
    console.log(user);
    res.render('./user/login');
};

//sign in
exports.sing_in=function (req,res) {
    var username=req.body.email;
    var password=req.body.password;
    if (username==='wei@126.com' && password==='wei'){
        res.redirect('/');
    }
    else
        res.redirect('/user/login');
};

//sing_up
exports.register=function (req,res) {
    res.render('./user/register');
};

exports.sing_up=function (req,res) {

};