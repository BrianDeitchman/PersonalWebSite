const express = require('express');
const app = express();
app.use('/',(req,res) => {
 res.send("Hello world")
});
const port = process.env.PORT || 4200;
app.listen(port, ()=> {
    console.log('listening on *:4200');
});