const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send("Hello, World!");
});

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send("About");
});

app.get('/haha', (req, res) => {
  res.type('text/plain');
  res.send("Haha!");
});

app.use((req, res) => {
  res.type('jstext/plainon');
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});