const knex=require('../config/config');
const {Model}=require('objection');
const User=require('./user');
Model.knex(knex);
class Question extends Model{
    static get tableName(){
        return 'question';
    }

    static get relationMappings(){
        const Answer=require('./answer');
        return {
            user:{
                relation:Model.BelongsToOneRelation,
                modelClass:User,
                filter:(query)=>query.select('id','name','email'),
                join:{
                    from: 'question.user_id',
                    to:'users.id'
                }
            },
            answer:{
                relation:Model.HasManyRelation,
                modelClass:Answer,
                join:{
                    from: 'question.id',
                    to:'answer.question_id'
                }
            },
        }
    }
}

module.exports=Question;