var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://mongodb:27017/sampledb';

var str = "";

app.route('/Employeeid').get(function(req, res) {
   console.log("method called...");	
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('Employee');
       var cursor = collection.find({});
       str = "";
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
var server = app.listen(8080, function() {});