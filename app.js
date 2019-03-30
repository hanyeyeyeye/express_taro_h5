const express = require('express');
const app = express();

app.get('/h5', function(req,res){res.sendFile(__dirname +'/dist/index.html')});

const static = express.static('dist');

app.use(static);
app.listen(8000 , function () {
    console.log('服务运行在8000端口')
});