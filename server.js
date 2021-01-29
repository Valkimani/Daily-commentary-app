const express = require("express");
// inform node an express server has been created
const app = express();

// Sets the initial port
const PORT = process.env.PORT || 3000;



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });