const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  const data = {
    message: 'Hello, World!'
  };

  res.status(200).json(data);
});

const port = 80;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

