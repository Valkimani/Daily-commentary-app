
//linking our routes to a series of "data" sources.
const fs =require ("fs")


// npm package for unique id
const { v4: uuidv4 } = require('uuid');
// ROUTING
module.exports = function (app) {
    // API GET Request
    app.get("/api/notes", (request, response) => {
        
        console.log("\n\nExecuting GET notes request");
       
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        
        console.log("\nGET request - Return notes data: " + JSON.stringify(data));
        
        // Send read data to response of 'GET' request
        response.json(data);
    });
    













  

}