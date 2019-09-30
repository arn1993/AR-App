var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.static(__dirname))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/ARApp.html");
})

app.listen(12345);
console.log("App listening in 12345");