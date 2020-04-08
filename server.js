const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    let existingCookie = req.cookies["nameOfTheUser"];
    if(existingCookie){
        res.send(`<h1>Welcome ${req.cookies["nameOfTheUser"]}</h1>`)
    }
    else{
        res.cookie('nameOfTheUser', 'Mia').send('<h1>Hey Welcome, first time here!</h1>')
    }
})

app.listen(3000, () => {
    console.log('app is running on 3000');
});