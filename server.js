const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname +"/public")))
app.use('/',(req,res) => {
 res.sendFile(__dirname +"/public/index.html")
});
const port = process.env.PORT || 4200;
app.listen(port, ()=> {
    console.log('listening on *:4200');
});