const { urlencoded } = require('body-parser');
const express = require('express');
const { dirname } = require('path');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: true});

// app.use(express.static('public'));

app.set('view engine', 'ejs');

//load static assests
app.use('/static', express.static(path.join(__dirname, 'public')))

//Home route
app.get('/', (req,res) =>{
    res.render('index', {title: "CBT Application"});
})

//Examsettings Page
app.get('/examsettings', (req,res) =>{
    res.render('examsettings', {title: "CBT Application"});
})

//Getting Submitted Data
app.post('/examsettings', urlencodedParser, (req,res)=>{
    let response = {
        subject:req.body.subject,
        years:req.body.years,
        jambno:req.body.jambno,
    }
    res.send(JSON.stringify(response));
});

const port = process.env.PORT||3000;


app.listen(port,()=>{console.log("Listerning to the server on http://localhost:3000")});