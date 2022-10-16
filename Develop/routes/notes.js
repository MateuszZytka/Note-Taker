const notes = require("express").Router();
const { readFromFile, writeToFile, readAndAppend } = require("../public/helpers/fsUtils");
const uuid = require('../public/helpers/uuid');

//get route to receive all notes in db.json
notes.get("/", (req,res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
})

//post route to add new note to db.json
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
      title,
      text,
      id: uuid()
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });

  notes.delete("/:id", async (req, res) => {
    console.log(`${req.method} request received to delete a note`)

    let noteArray = []
    const deleteNote = req.params.id

    await readFromFile("./db/db.json").then((data) => noteArray = JSON.parse(data))
    const newArray = noteArray.filter((note) => note.id !==deleteNote)
    console.log(newArray)

    writeToFile("./db/db.json", newArray)
    res.send(newArray)
  })

module.exports = notes