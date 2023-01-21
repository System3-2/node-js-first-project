var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var messages = [
  { name: "Muyiwa", message: "Hi there" },
  { name: "Oloja", message: "Oloja there" },
];
app.get("/messages", (req, res) => {
  res.send(messages);
});
app.post("/messages", (req, res) => {
  console.log(req.body);
  messages.push(req.body);
  res.sendStatus(200);
});
var server = app.listen(8080, () => {
  console.log("server is listening on port " + server.address().port);
});
