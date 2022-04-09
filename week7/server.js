const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);

  res.status(200);
  res.send({
    is_it_fine: true,
  });
});

app.listen(3000, () => {console.log("server listening")});
