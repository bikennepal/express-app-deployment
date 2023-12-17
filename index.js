const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello, worlds!');
});

app.listen(8080, () => {
  console.log('Server is up and running on port 8080');
});
