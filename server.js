const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// wildcard
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

// port listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);