import express from 'express';

const app = express();

const port_key = 'port';
const DEFAULT_PORT = 3000;
app.set(port_key, process.env.PORT || DEFAULT_PORT)

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send("Hello, World!");
});

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send("About");
});

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(app.get(port_key), () => {
  console.log('Express started on http://localhost:' + app.get(port_key) + '; press Ctrl-C to terminate.');
});
