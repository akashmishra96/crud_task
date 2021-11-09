
const User = require('../models/user.model');

exports.user_create = function (req, res) {
     let user = new User(
          {
               user_id        : req.body.user_id,
               access_token   : req.body.access_token,
               first_name     : req.body.first_name,
               last_name      : req.body.last_name,
               gender         : req.body.gender,
               email_id       : req.body.email_id,
               country_code   : req.body.country_code,
               mobile_number  : req.body.mobile_number,
               password       : req.body.password,
               device_type    : req.body.device_type,
               device_token   : req.body.device_token,
               latitude       : req.body.latitude,
               longitude      : req.body.longitude,
               location       : req.body.location,
               is_blocked     : req.body.is_blocked,
               is_active      : req.body.is_active,
               is_verified    : req.body.is_verified,
           is_profile_created : req.body.is_profile_created,
                created_on    : req.body.created_on,
                social_id     : req.body. social_id,
                social_type   : req.body.social_type
                
          }
     );

     user.save(function (err) {
          if (err) {
               return (err);
          }
          res.send('user Created successfully')
     })
};

exports.user_details = function (req, res) {
     User.findById(req.params.id, function (err, user) {
          if (err) return(err);
          res.send(user);
     })
};


exports.user_update = function (req, res) {
     User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
          if (err) return(err);
          res.send('User udpated.');
     });
};


exports.user_delete = function (req, res) {
     User.findByIdAndRemove(req.params.id, function (err) {
          if (err) return(err);
          res.send('User Removed successfully!');
     })
};




