const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')

const app = express();

app.use(cors())

const port = 8000;

let jsonParser = bodyParser.json()


require('./app/routes')(app, {});

let server = app.listen(port, () => {
    console.log("We are live on port on new mac", port);
})
