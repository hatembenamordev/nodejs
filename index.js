const express = require('express');
// const User = require('./models/users');
// require('./config/coonect');

const app = express();
app.use(express.json());


app.post('/add', (req, res) => {

    data = req.body;
    // usr = new User(data);
    // usr.save();
    console.log(data);
   res.end()

});


app.get('/getall', (req, res) => {


    console.log('get');

});

// app.update('/update',()=>{

//      console.log('update');
//  });


app.listen(3000, () => {

    console.log('server worck');
})