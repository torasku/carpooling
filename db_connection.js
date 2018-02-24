
var express    = require('express');
var mysql      = require('mysql');
var jsonData = [];

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "carpooling_db"
});

/*var bodyParser = require('body-parser');
var app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/myaction', function(req, res) {
    res.send('You sent the name "' + req.body.name + '".');
});

app.listen(8080, function() {
    console.log('Server running at http://127.0.0.1:8080/');
});

app.use(express.bodyParser());*/

function insertJSON () {
    var object = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    document.getElementById("test").innerHTML = object.name + ", " + object.age;
}



/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Trip", function (err, result) {
        if (err) throw err;
        //var data;
        /*for(var i = 0; i < rows.length; i++){
            data.push(rows[i]);
        }*/
        //jsonData = JSON.parse(data);*/
        /*con.end();

        var obj = JSON.parse(result[1]);
        document.getElementById("test").innerHTML = obj.t_id + ", " + obj.t_carType;
        //document.getElementById("test").innerHTML = result[1]["t_name"] + " " + result[1]["t_cartype"];
        console.log(result[1]["t_cartype"]);
        console.log(result);
        //console.log(jsonData);
    });
});*/





/*$(document).ready(function(){
    $("button").click(function(){
        $.getJSON(jsonData, function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
        });
    });
});*/

