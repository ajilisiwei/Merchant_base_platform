var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs');
const SALT_WORK_FACTOR=10;
var UserSchema=new mongoose.Schema({
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

// UserSchema.pre('save',(next)=>{
//     var user=this;
//     if(this.isNew){
//         this.meta.createdOn = user.meta.updateOn = Date.now();
//     }else {
//         this.meta.updateOn = Date.now();
//     }
//     bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
//         if(err) return next(err);
//         bcrypt.hash(user.password,salt,(err,hash)=>{
//             if(err) return next(err);
//             user.password=hash;
//             next();
//         })
//     })
//     next();
// });

UserSchema.pre('save', function(next) {
    var user = this;

    if (this.isNew) {
        this.meta.createdOn = this.meta.updateOn = Date.now()
    }
    else {
        this.meta.updateOn = Date.now()
    }

    bcrypt.genSalt(SALT_WORK_FACTOR,function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password,salt,null,function(err, hash){
            if (err) return next(err);
            user.password = hash;
            next();
        })
    })
});

UserSchema.statics={
    findByUserName:function (username,cb) {
        return this
            .findOne({username:username})
            .exec(cb);
    },

    findById:function (id,cb) {
        return this
            .findOne({_id:id})
            .exec(cb);
    },

    fetch:function (cb) {
        return this
            .find({})
            .sort('meta.createdOn')
            .exec(cb);
    }
};

module.exports=UserSchema;