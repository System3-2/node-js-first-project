const express = require("express");
let { people } = require('./data');
const app = express();

app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));


app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
})

app.post('/login', (req, res) => {
  // console.log(req.body);
  const { name } = req.body;

  if (name) {
    res.status(201).send(`Welcome ${name}`)
  }
  res.status(401).send('provide credentials please');
});

app.post('/api/people', (req, res) => {
  
});


app.listen(5000, () => {
  console.log(`app is listening on port 5000...`);
});
