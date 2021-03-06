const express = require("express");
const bodyParser = require("body-parser");

const app = express()

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", function(req, res){
    res.json({ message: "Welcome to IMED_Stuff application." });
  });

require("./routes/item.routes.js")(app);
  
// set port, listen for requests
app.listen(3000, function(req, res){
    console.log("Server is running on port 3000.")
});
