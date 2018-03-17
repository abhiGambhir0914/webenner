const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3930;

app.use(express.static('final'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.sendFile('index.html');
});

app.listen(port , () => console.log(`Server set up at port: ${port}`));
