
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

const messages = [
  {
    message: "savy",
    age: 26
  },
  { 
    message: "hello",
    age: 1
}];



app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});