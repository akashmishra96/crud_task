const express = require('express');
const bodyParser = require('body-parser');

const app = express();  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require("./modules/db.connect");

const User = require('./routes/user.route');

// app.use('/products', product);
app.use('/user',User);



let port = 1234;

app.listen(port, () => {
    console.log('listening on ' + port);
});


