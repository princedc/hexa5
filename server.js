const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(__dirname + '/dist/Hexamatics'));

app.listen(process.env.PORT || 8080);

//PathLocationStategy

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/dist/Hexamatics/index.html'));

})

console.log('Console listening')