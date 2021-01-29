// Dependencies
const path = require("path");
// Routing
module.exports = function (app){
    // HTML GET Requests when a user visits the page
   
    
    app.get('/notes', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    app.get('*', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/index.html'));
    });
};