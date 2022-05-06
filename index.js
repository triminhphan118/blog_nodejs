const express = require('express');

let app = express();
let port = 3000;

app.get('/', (req, res) => {
    return res.send('Hello World!!!');
});

app.listen(port, () => {
    console.log('App listen port '+ port);
})