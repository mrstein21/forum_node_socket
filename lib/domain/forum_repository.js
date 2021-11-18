module.exports=class {
    async getQuestion(){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getAnswer(question_id){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async addQuestion(params){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async addAnswer(params){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getDetailQuestion(question){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getDetailAnswer(id){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
}