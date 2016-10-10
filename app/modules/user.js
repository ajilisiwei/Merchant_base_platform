var mongoose=require('mongoose');
var UserSchema=require('../schmeas/user');
var User=mongoose.model('User',UserSchema);
module.exports=User;