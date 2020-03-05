var mongoose = require('mongoose');
// var userSchema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
// define the schema for our user model
let  userSchema  =new mongoose.Schema(
    {
        user_id : {
            type : String,
            require : true
        }, 
        access_token : {
            type : String,
            require : true
        },   
        first_name : {
            type : String,
            require : true,
            default : null  
        },
        last_name : {
            type : String,
            require : true,
            default : null
        },
        gender : {
            type : String,
            require : true,
            default : null
        },
        email_id : {
            type: String,
            //default : null
            require:true,
            // unique:true,
            // lowercase:true
        },
        country_code : {
            type : String,
             default : null
        },
        mobile_number : {
            type : String,
             default : null
        },
        password : {
            type : String,
            require : true,
             default : null
        },
        device_type : {
            type : Number,
            require : true,
             default : 0
        },
        device_token : {
            type : String,
            require : true,
             default : null
        },
        latitude : {
            type : Number,
            require : true,
            default : 0.00
        }, 
        longitude : {
            type : Number,
            require : true,
            default : 0.00
        },
        location : {
             type: {type: String, default: 'Point'},
            coordinates: [Number]
        },
        is_blocked : {
            type : Number,
            //require : true,
            default : 0
        },
        is_active : {
            type : Number,
            default : 0
        },
        is_verified : {
            type : Number,
            default : 0
        },
        is_profile_created : {
            type : Number,
            default : 0
        },
      
        created_on : {
            type : String,
            require : true
        },
       
        social_id : {
            type : String,
            default : null
        },
        social_type : {
            type : Number,
            default : 0
        },
        
});
// generating a hash
userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
// checking if password is valid 
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

//create the model for users and expose it to our app 
module.exports = mongoose.model('User', userSchema);
