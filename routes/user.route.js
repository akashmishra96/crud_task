const express = require('express');
const router = express.Router();

//load our controllers 
const user_controller = require('../controllers/user.controller');


router.post('/create', user_controller.user_create);// create a user

router.get('/:id', user_controller.user_details);//get a user

router.put('/:id/update', user_controller.user_update);//update a user

router.delete('/:id/delete', user_controller.user_delete);//delete a user

 module.exports = router;

