const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

let listener = app.listen(process.env.PORT || 8080, () =>
console.log("Server started"  + listener.address().port));
