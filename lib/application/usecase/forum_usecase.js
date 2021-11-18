const ForumRepo=require('../../infrastructure/repository/forum_repository');
const forumRepository=new ForumRepo();

module.exports={
   getQuestion:async()=>{
      var data=await forumRepository.getQuestion();
      return data; 
   },
   getAnswer:async(question_id)=>{
       var data=await forumRepository.getAnswer(question_id);
       return data;
   },
   addQuestion:async(data,socket)=>{
     try{
       console.log(data.data);
      var question=await forumRepository.addQuestion(data.data); 
      var inserted_question=await forumRepository.getDetailQuestion(question.id); 
      var broadcast_data={
          "notification":data.notification,
          "data":inserted_question
        }
       socket.emit("question",broadcast_data);

     }catch(err){
       console.log(err);
     }
    
   },
   addAnswer:async(data,socket,io)=>{
    var answer=await forumRepository.addAnswer(data.data);
    var insertedAnswer=await forumRepository.getDetailAnswer(answer.id);
    var broadcast_data={
      "notification":data.notification,
      "data":insertedAnswer
    }
    socket.emit("answer",broadcast_data);
    for(var i=0;i<online_users.length;i++){
      if(online_users[i].id.toString()==data.data.user_id.toString()){
          console.log("mengirim data notifikasi");
          ///kirim event ke pengguna tertentu berdasarkan socket id
          io.to(online_users[i].socket_id).emit("notification",broadcast_data);
      }
    }
  } 
}