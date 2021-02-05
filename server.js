// Dependencies
const express = require("express");
// inform node an express server has been created
const app = express();

// Sets the initial port
const PORT = process.env.PORT || 3000;

// express routes handling data parsing
app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());
app.use(express.static("public"));

// Routes
require ('./routes/apiRoutes')(app);
require ('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  