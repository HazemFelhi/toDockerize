const express = require('express');

const app = express();

app.get('/', (req, res) => { res.send('hello there') });

port = 3000;
app.listen(port, () => {console.log(`the server is listenning on port ${port}`)});