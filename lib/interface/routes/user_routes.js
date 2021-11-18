const UserController=require('../controller/user_controller');
const express = require('express')
const { body } = require('express-validator');
var router = express.Router()
router.post("/login",
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  UserController.login
);
router.post("/register",
  body('name').isLength({ min: 5 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  UserController.register
);
module.exports=router;