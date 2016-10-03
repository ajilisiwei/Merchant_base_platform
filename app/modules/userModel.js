var mongoose=require('mongoose');
var userSchema=require('../schmeas/userSchema');
var userModel=mongoose.model('userModel',userSchema);
module.exports=userModel;