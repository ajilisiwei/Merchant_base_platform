var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs');
var Schema=mongoose.Schema;
const SALT_WORK_FACTOR=10;
var userSchema=new Schema({
    name:String,
    password:String,
    username:String,
    email:String,
    phone:String,
    meta:{
            createdOn:{
                type:Date,
                default:Date.now()
            },
            updateOn:{
                type:Date,
                default:Date.now()
            }
        }
});

userSchema.pre('save',(next)=>{
    var user=this;
    if(user.isNew){
        user.meta.createdOn=user.meta.updateOn=Date.now();
    }else {
        user.meta.updateOn=Date.now();
    }
    bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash(user.password,salt,(err,hash)=>{
            if(err) return next(err);
            user.password=hash;
            next();
        })
    })
});

module.exports=userSchema;