const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
bodyParserr = bodyParser.urlencoded({ extended: true });
require('./config/coonect');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'assets')))

app.get('/', (req, res, next) => {

    res.sendFile(path.join(__dirname, 'src', 'index.html'))

});

app.post('/form', bodyParserr, (req, res, next) => {


    res.send(req.body)
    res.end()

});


app.get('/getall', (req, res) => {


    console.log('get');

});



app.listen(3000, () => {

    console.log('server worck');
})