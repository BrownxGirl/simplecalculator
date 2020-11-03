var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pug = require('pug');
var port = 3008;

let url = 'mongodb://localhost:27017/form';
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true});

let database = mongoose.connection;
database.on('error', function(){ console.log('There is a connection error')});
database.once('open', function(){
console.log('connection succeeded');
});

var app = express();


function addNewVisitor(data){
    database.collection('visitors').insertOne(data);
    console.log('Data inserted successfully!');
}

function viewVisitors(){
    database.collection('visitors').find().pretty();
    console.log('showing all visitors')
}

// function addNewVisitor(data){
//     database.collection('visitors').deleteOne(data);
//     console.log('Data deleted!');
// }

app.use(bodyParser.json());
app.use('/new_visit',express.static('public'));//problem
app.use(bodyParser.urlencoded({extended : true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/new_visit', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/new_visit', function(req, res){
    addNewVisitor(req.body);
        database.collection('visitors').find().sort({_id: -1}).limit(1).toArray(function(err, result) {
        if (err) throw err;
        res.render('index',{
            id: result[0]._id,
            visitor: result[0].visitorName,
            assistant: result[0].assistantName,
            age: result[0].age,
            date: result[0].date, 
            time: result[0].time,
            comment: result[0].comment
        })
    });
})
var newApp = app.listen(port, () => console.log(`running on ://localhost:${port}`));






module.exports = newApp

























