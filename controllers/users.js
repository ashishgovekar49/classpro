var userModel = require('../models/Users');

exports.getUsers = function(){
    return userModel.users;
}

exports.getUser = function(id) {
    for(var i=0; i<userModel.length;i++){
        if(userModel[i].id == id)
            return userModel[i];
    }
}



exports.compareAuth= function(username,password){
    for (var i=0;i<userModel.length;i++)
    {
        if (userModel[i].username==username &&
           userModel[i].password==password)
            
        {
           return userModel[i];
            //return true;
        }}
    return false;
}

exports.postLogin = function(request,response)
         {
             
             var result = users.compareAuth(request.body.email,request.body.password);
             
//             console.log(request.body.email);
//             console.log(request.body.password);
           if( result)
           {
             response.send("LOGIN SUCESSFULL.hi."+result.name);
           }
             else
             {
response.send("failed");
             
             } };