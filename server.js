var express = require("express")
var app = express()
var cors = require("cors")

app.use(cors())
app.use(express.static(__dirname));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/examples/index.html")
})

app.get("/resume",function(req,res) {
    res.sendFile(__dirname+"/resume.pdf")
})

app.get("/microsoft_certificate",function(req,res) {
    res.sendFile(__dirname+"/Microsoft_Certificate.pdf")
})

app.listen(30000, function(){
    console.log("server hosting...")
})
