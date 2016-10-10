// var User = require('../modules/user');
var mongoose=require('mongoose');
var dbUrl = 'mongodb://localhost:27017/merchantbase';
require('../schmeas/user');
require('../modules/user');
mongoose.connect(dbUrl);
var User=mongoose.model('User');


exports.register=function (_user,cb) {
    // var result=JSON.parse({userNameExist:false,success:false,error:false});
    User.findByUserName(_user.username,(err,user)=>{
        // var result={};
        if(err) {
            result.error=true;
            cb(result);
        }
        if(user) {
            result.userNameExist=true;
            cb(result);
        }
        else {
            user=new User(_user);
            console.log(user);
            user.save(function(err,user){
                var result={};
                if(err) result.error=true;
                else{
                    result.success=true;
                    console.log(user);
                    cb(result);
                }
            });
        }
    });
};

