//core modules 
var express =require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');

//user model
var usersController = require('./controllers/users');



var app =express();

app.set('views',path.join(__dirname,'views'));

 app.set('view engine','html');
app.engine('html',hbs.__express);

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended:false
    }));

app.use(express.static('public'));



//routes
app.get('/',function(request,response){
   
    response.render('index',{title:"Home",
                        users:usersController.getUsers});

});


app.get('/users/:id',function(request,response){
 var user = usersController.getUser(request.params.id);
    response.render('profile',{title:"User profile",
                        user:user});
});


//app.get('/login',function(request,response){
//response.sendfile('./views/login.html');
    
app.get('/login',function(request,response){
response.render('login',{
    title:"login"});
    
});


app.post('/login',usersController.postLogin);

//app.get('/about',function(request,response){
//response.sendfile('./views/about.html');
//});





app.get('/about',function(request,response){
response.render('about',{
    title:"about"});
});


//app.get('/signup',function(request,response){
//response.sendfile('./views/signup.html');
//});



app.get('/signup',function(request,response){
response.render('signup',{
    title:"signup"});
});

app.listen(3000);