const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const path = require('path');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/auth',authRoutes);
app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message:error.message || 'An error occured on server!!'})
})

app.get('/page',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/page/login',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/login.html'));
  //__dirname : It will resolve to your project folder.
});


app.listen(6001);