const ForumRepository=require('../../domain/forum_repository');
const Answer = require('../orm/answer');
const Question=require('../orm/question');


module.exports=class extends ForumRepository{
    async getQuestion(){
       var data=await Question.query().withGraphFetched('[user,answer]').orderBy('id','DESC')
       return data;
    }

    async getAnswer(question_id){
       var data=await Question.query().findById(question_id).withGraphFetched('[user,answer.user]');
       return data;
    }

    async addQuestion(params){
      var question= await Question.query().insert(params);
      return question;
    }

    async getDetailQuestion(id){
       var data= await Question.query().findById(id).withGraphFetched('[user,answer]');
       return data;
    }

    async addAnswer(params){
       var answer= await Answer.query().insert(params);
       return answer;
    }

    async getDetailAnswer(id){
       var data=await Answer.query().findById(id).withGraphFetched('user');
       return data;
    }
}