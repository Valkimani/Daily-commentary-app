
//linking our routes to a series of "data" sources.
const fs =require ("fs");
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
        // Assign id from uuid package (when a new note is made add an id to newNote before it is pushed into data).
    
        newNote.id = uuidv4();

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    
        // new note pushed in notes file 'db.json'
        data.push(newNote);
    
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        
        console.log("\nNew note added to 'db.json' file!");
       
        response.json(data);
    });

// API DELETE request
app.delete("/api/notes/:id", (request, response) => {
    // Fetched id to delete
    let noteId = request.params.id.toString();
    
    console.log(`\n\nDELETE note request for noteId: ${noteId}`);
    // Read data 
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    // filter data to get notes 
    const newData = data.filter( note => note.id.toString() !== noteId );
    // Write new data 
    fs.writeFileSync('./db/db.json', JSON.stringify(newData));

    
    console.log(`\nNote with id deleted successfully : ${noteId}`);
    // Send response
    response.json(newData);
});
};
