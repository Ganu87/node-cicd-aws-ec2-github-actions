const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello from GitHub Actions CI/CD! test 1.2.2');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


// new dev baranch created