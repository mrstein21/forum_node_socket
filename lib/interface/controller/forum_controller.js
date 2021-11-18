const forumUseCase=require('../../application/usecase/forum_usecase');
const controller=require('./controller')
module.exports={
  async getQuestion(req,res){
      try{
        var data=await forumUseCase.getQuestion();
        return controller.responseOK(res,data); 
      }catch(err){
        return controller.responseFailure(res,err);
      }
  },
  async getAnswer(req,res){
      try{
        var data=await forumUseCase.getAnswer(req.params.question_id);
        return controller.responseOK(res,data); 
      }catch(err){
        return controller.responseFailure(res,err);
      }
  }
}