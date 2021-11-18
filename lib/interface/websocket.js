const socketIO=require('socket.io');
const forumUseCase=require('../application/usecase/forum_usecase');
module.exports=(server)=>{ 
 const io=socketIO(server);
 io.on("connection",(socket)=>{
    socket.on("online_users",(data)=>{
        online_users.push({
           "id":data["id"],
           "name":data["name"],
           "socket_id":socket.id
        });
      socket.emit("online_users",online_users);
    });

    socket.on("question",async(data)=>{
      console.log("question detected bro");
      await forumUseCase.addQuestion(data,socket);
    });

    socket.on("answer",async(data)=>{
      await forumUseCase.addAnswer(data,socket,io);
    })

    socket.on('disconnect',()=>{        
      for(let i=0; i < online_users.length; i++){
        if(online_users[i].socket_id === socket.id){
          online_users.splice(i,1); 
        }
      }
      socket.emit('online_users',online_users); 
    });

    socket.on("offline_users",(data)=>{
      for(let i=0; i < online_users.length; i++){
         if(online_users[i].id=== data["id"].toString()){
            online_users.splice(i,1); 
         }
       }
      socket.emit("online_users",online_users);
    });
 })
}
