var users =[
    {   id:1,
        name: "ashish",
        username: "ashish49@gmail.com",
        password: "abc"
    },
    {   id:2,
        name: "viku",
        username: "viku11@gmail.com",
        password: "xyz"
    }
];

exports.getUsers = function(){
    return users;
}



exports.getUser = function(id) {
    for(var i=0; i< users.length;i++){
        if(users[i].id == id)
            return users[i];
    }
}



exports.compareAuth= function(username,password){
    for (var i=0;i<users.length;i++)
    {
        if (users[i].username==username &&
            users[i].password==password)
            
        {
           return users[i];
            //return true;
        }}
    return false;
}