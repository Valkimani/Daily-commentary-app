# Unit 11 Express : Note Taker

## Description

This homework demonstrates an application that can be used to write, save, and delete notes. An express backend has been used to save and retrieve notes data from a JSON file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Process

Building the backend routes running the app.

  * GET `/notes` - Returns the `notes.html` file.

  * GET `*` - Returns the `index.html` file
A `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.


## API routes 

  * GET `/api/notes` - Reads the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Receives a new note to save on the request body, add it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete. A unique `id` has been given to each note when saved. To delete a note, all notes from the `db.json` file have to be read, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


## Screenshot


## links

[Heroku Guide]()
[Github]()

## License

Copyright (c) [2020] [Valentine Kimani]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




