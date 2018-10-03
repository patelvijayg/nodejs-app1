const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

//const url = 'mongodb://localhost:27017/sampledb';
//const url = 'mongodb://mongodb:mongodb@mongodb:27017/sampledb';
const url = "mongodb://mongodb1:mongodb1@ds121753.mlab.com:21753/sampledb"
const str = "";


app.route('/emp').get(function(req, res) {
	console.log("emp method called...!!!");	
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('myCollection');
	    console.log("connect");	
       var cursor = collection.find({});
	   console.log("collection");	
       var str = "";
		if(cursor !=null) { console.log(cursor)}
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + " new   Employee id  " + item['Employeeid'] + "</br>";
                   str = str + " name  " + item['name'] + "</br>";
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


//npm install --save-dev express
//npm install --save-dev mongodb
//mongo --host 172.17.0.6 --port 27017 -u "mongodb" -p "mongodb" --authenticationDatabase "sampledb"
//use sampledb
//db.myCollection.insert({"name":"vijay","Employeeid":"10"})
//db.auth("mongodb","mongodb")