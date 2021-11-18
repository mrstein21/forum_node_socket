const forumController=require('../controller/forum_controller');
const express = require('express')
var router = express.Router();
router.get("/question",forumController.getQuestion);
router.get("/question/answer/:question_id",forumController.getAnswer);
module.exports=router;