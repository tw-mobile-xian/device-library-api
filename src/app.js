import express from 'express';

import router from './router';

const app = express();

const port_key = 'port';
const DEFAULT_PORT = 3000;
app.set(port_key, process.env.PORT || DEFAULT_PORT)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(app.get(port_key), () => {
  console.log('Express started on http://localhost:' + app.get(port_key) + '; press Ctrl-C to terminate.');
});
