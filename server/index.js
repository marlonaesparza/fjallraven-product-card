const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const card_images = require('../database/mysql/utils/card_images');

const app = express();
const port = 8001;

app.use(cors());
app.use(express.static(path.resolve('public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
  if (req.params.id === 'favicon.ico') {
    res.end();
    return;
  }

  if (req.query.proxy) {
    res.sendFile(path.resolve(__dirname + '/../public/dist/bundle.js'));

  } else {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  }
});

app.get('/card/:id', (req, res) => {
  return card_images.get({id: req.params.id})
    .then((results) => {
      const result = JSON.stringify(results[0][0]);
      res.send(result);
    })
    .catch((error) => {
      console.log('Error:', error);
      res.end();
    });
});

app.listen(port, () => {
  console.log(`Listening on PORT:${port}`);
});
