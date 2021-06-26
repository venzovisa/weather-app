const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(process.env);
  console.log(`Weather App listening at http://localhost:${port}`);
});