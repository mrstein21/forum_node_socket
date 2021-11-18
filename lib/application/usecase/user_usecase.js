const UserRepository=require('../../infrastructure/repository/user_repository');
const UserRepo=new UserRepository();
var jwt=require('jsonwebtoken');
var bcrypt=require("bcryptjs");

module.exports={
    register:async(params)=>{
     var user={
            email:params.email,
            name:params.name,
            password: bcrypt.hashSync(params.password,8),
      }
      var data=await UserRepo.register(user);
      if(data==null){
         return {
            "message":"Email already used", 
         } 
      }
      const payload={
        "name":data.name,
        "email":data.email,
        "id":data.id
      };
      var token= jwt.sign(payload,'secretkey');
      return{
          "payload":data,
          "token":token
      }
    },
    login:async(params)=>{
        var data=await UserRepo.getUserByEmail(params.email);
        if(data==null){
            return {
                "message":"User Not Found",
                
            }
        }
        data.password = data.password.replace('$2y$', '$2a$');
        var compare=bcrypt.compareSync(params.password,data.password);
        const payload={
            "name":data.name,
            "email":data.email,
            "id":data.id
          };
        if(compare==true){
            var token= jwt.sign(payload,'secretkey');
            return{
                "payload":payload,
                "token":token
            }
        }
       return {
         "message":"Incorrect Password"
       }
    }
}