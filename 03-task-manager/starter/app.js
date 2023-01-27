const express = require('express');
const app = express();
const port = 3000;

// app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('Task manager app');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
})