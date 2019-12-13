const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));

app.use(cors());

app.listen(process.env.PORT, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log(`Listening on port ${process.env.PORT}...`);
  }
});
