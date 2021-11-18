const { register } = require('../../application/usecase/user_usecase');
const UserUseCase=require('../../application/usecase/user_usecase');
const controller=require('./controller');
const { validationResult } = require('express-validator');

module.exports={
    async login(req,res){
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return controller.responseProcessFailed(400,res,{
              "message":"Bad Request",
              "errors": errors.array()
            })
          }
          var data=await UserUseCase.login(req.body);
          return controller.responseOK(res,data);  
        } catch (error) {
           return controller.responseFailure(res,error);   
        }
    },
    async register(req,res){
        try{
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return controller.responseProcessFailed(400,res,{
              "message":"Bad Request",
              "errors": errors.array()
            })
          }
          var data=await UserUseCase.register(req.body);
          return controller.responseOK(res,data);
        }catch(error){
         return controller.responseFailure(res,error);   
        }
    }
}