let express = require("express");
let app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    let sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    }
    let animall = req.params.animal.toLowerCase();
    let sound = sounds[animall];
    res.send("The " + animall + " says '" + sound + "'");
});

app.get("/repeat/:word/:num", function(req, res){
    let word = req.params.word;
    let num = Number(req.params.num);
    let result = "";

    for (let i = 0; i < num; i++){
        result += word + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});


app.listen(4000, function(){
    console.log("server on port 4000 started");
})