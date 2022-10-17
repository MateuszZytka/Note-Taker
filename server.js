const express = require('express');
const api = require('./routes/index.js');
const html = require("./routes/htmls")
const path = require("path")

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);


app.use(express.static(path.join(__dirname, 'public')));

app.use("/", html)

// active server
app.listen(process.env.PORT || 5000)