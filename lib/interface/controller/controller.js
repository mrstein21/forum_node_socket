function responseOK(res,data){
    return res.status(200).json({
       "success":true,
       "data":data
    });
}

function responseProcessFailed(statusCode,res,message){
    return res.status(statusCode).json({
       "success":false,
       "data":message
    });
}

function responseFailure(res,err){
    console.log(err);
    return res.status(500).json({
        "success":false,
        "message":"Terjadi kesalahan pada server"
    })
}

module.exports={
    responseOK,
    responseFailure,
    responseProcessFailed
}