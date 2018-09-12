var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://mongo@mongo:mongodb:27017/sampledb';

var str = "";



app.route('/emp', function(req, res) {
	console.log("emp method called...");	
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('myCollection');
	    console.log("connect");	
       var cursor = collection.find({});
	   console.log("collection");	
       str = "";
		if(cursor !=null) { console.log(cursor)}
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + "    Employee id  " + item.Employeeid + "</br>";
           }
       }, function(err) {
           res.send(str);
           db.close();
          }
       );
   });
});

app.get('/', function(req, res) {
	console.log("hello method called...");	
    res.send('Hello from NodeJS  at '+ new Date());
});


var server = app.listen(8080, function() {});
