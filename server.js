const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, './src/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server listening at https://localhost:3000 yo');
});

module.exports = app;
