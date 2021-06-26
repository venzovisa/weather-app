const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Weather App listening at http://localhost:${port}`)
});