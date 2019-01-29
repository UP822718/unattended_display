const express  = require('express');
const database  = require('./database.js');
let v1 = require('./v1/main.js');
let v2 = require('./v2/main.js');

const app = express()
app.use('/backend/v1',v1);
app.use('/backend/v2',v2);

app.use(express.static('./static'))
app.use(express.static('./static/unatteded/v2'))



app.listen(8080);
