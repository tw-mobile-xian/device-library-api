import express from 'express';
import path from 'path';

import router from './router';

const app = express();

const port_key = 'port';
const DEFAULT_PORT = 3000;
app.set(port_key, process.env.PORT || DEFAULT_PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../../public')));

app.use('/api', (req, res, next) => {
  if (req.header('identifier') === "5bCP5YCf5YCf") {
    next();
    return;
  } else {
    console.log("Request Header: " + req.header);
    res.status(403);
    res.send("403 - Forbidden")
  }
})

app.use('/api', router);
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send("404 - Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Internal Error!');
});

app.listen(app.get(port_key), () => {
  console.log('\nExpress started on http://localhost:' + app.get(port_key) + '; press Ctrl-C to terminate.\n');
});
