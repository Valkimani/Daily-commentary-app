
//linking our routes to a series of "data" sources.
const fs =require ("fs")

// ROUTING
module.exports = function(app) {
  // API GET Requests

  app.get("/api/notes", function(request, response) {
    res.json(notes);
  });

  app.get("/api/", function(req, res) {
    res.json(waitListData);
  });

  /