const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://admin-luis:1EwbSrjU7SPbQxPo@cluster0-sm14w.mongodb.net/heroDB";

//TODO: Remove visable password and replace with env variable
const db = mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

const heroSchema = {
  name: String
};

const Hero = mongoose.model("Hero", heroSchema);

app.route("/api/heroes")
  .get((req, res) => {
    Hero.find(function(err, foundHeroes){
      if(!err){
        res.send(foundHeroes);
      } else {
        res.send(err);
      }
    });
  });

app.listen(3000, function(){
  console.log("Server is running at port 3000.");
});
