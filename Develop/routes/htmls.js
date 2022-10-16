const html = require("express").Router();
const path = require("path")


// get route home page
html.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
)

// sets route to notes page
html.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// get route home page
html.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
)
module.exports = html