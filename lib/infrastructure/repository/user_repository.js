const UserRepository=require('../../domain/user_repository');
const User=require('../orm/user');
module.exports=class extends UserRepository{
   async register(params){
      var data= await User.query().insert(params);
      return data;
   }

   async getUserByEmail(params){
       var data=await User.query().where("email",params).first();
       return data;
   }

}