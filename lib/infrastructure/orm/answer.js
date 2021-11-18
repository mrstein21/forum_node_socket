const knex=require('../config/config');
const {Model}=require('objection');
const User=require('./user');
const Question=require('./question');
Model.knex(knex);
class Answer extends Model{
    static get tableName(){
        return 'answer';
    }

    static get relationMappings(){
        return {
            user:{
                relation:Model.BelongsToOneRelation,
                modelClass:User,
                filter:(query)=>query.select('id','name','email'),
                join:{
                    from: 'answer.user_id',
                    to:'users.id'
                }
            },
            question:{
                relation:Model.BelongsToOneRelation,
                modelClass:Question,
                join:{
                    from: 'answer.question_id',
                    to:'question.id'
                }
            },
        }
    }
}

module.exports=Answer;