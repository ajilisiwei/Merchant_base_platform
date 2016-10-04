var index=require('../controllers/index');
var user=require('../controllers/user');
var exception=require('../controllers/exception');

module.exports=function (app) {
    //Index
    app.get('/',index.index);

    //About user
    //users
    app.get('/user',user.user);
    //login
    app.get('/user/login',user.login);
    //register
    app.get('/user/register',user.register);
    //Sign in
    app.post('/user/sign_in',user.sign_in);
    //Sign up
    app.post('/user/sign_up',user.sign_up);
    //no found
    app.use(exception.nofound);

    //error page
    app.use(exception.err);

}
