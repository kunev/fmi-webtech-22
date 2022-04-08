const express = require('express');
const path = require('path');

const app = express();


app.use((req, res, next) => {
  res.set('x-my-super-cool-custom-header', 'with a value');

  next();
});

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.write('oh, hi!');
  res.write('oh, hi!');
  res.send();
});

app.get('/times_two/:id', (req, res) => {
  const result = 2 * (+req.params.id)

  res.write(String(result));
  res.send();
});

app.listen(3000);
