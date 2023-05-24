const express = require('express');
const app = express();

const sampleHandler = require('./app/controller/sample.js');

app.get('/test', sampleHandler);

const port = 80;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

