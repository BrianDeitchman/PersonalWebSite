const express = require('express');
const app = express();
app.use('/',(req,res) => {
 res.send("Hello world")
});

app.listen(4200, ()=> {
    console.log('listening on *:4200');
});