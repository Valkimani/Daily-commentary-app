
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
    // API POST Request
    app.post("/api/notes", (request, response) => {
        //Get new note from request body.  
        const newNote = request.body;
        
        console.log("\n\nPOST request - New Note : " + JSON.stringify(newNote));
        // Assign id 

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    
        // new note pushed in notes file 'db.json'
        data.push(newNote);
    
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        
        console.log("\nSuccessfully added new note to 'db.json' file!");
       
        response.json(data);
    });














  

}