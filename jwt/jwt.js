require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const posts = [
    {
        id:213456786543,
        username:"Kyle", 
        title:"Hello guys,I'm super happy to be part of this exercise!  "
    },
    {
        id:3648579,
        username:"Bob", 
        title:"What the hell am I doing here ? "
    },
    {
        id:12374958,
        username:"Leo", 
        title:"What the hell am I doing here ? "
    }
];

const authenticatToken = (req, res, next) =>{
    const authHeader = req.headers["authorization"];
    console.log(req.headers["authorization"]);
    // console.log(authHeader && authHeader.split(" ")[1])
    const token = authHeader && authHeader.split(" ")[1];


    if(token  == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
        })
        next()
    
}

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/posts',authenticatToken, (req, res)=>{
    console.log(req.body);
    res.send(posts.filter((post) => post.username === req.body.username))
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const user = {
            username:username
        };
        const accessToken = jwt.sign({name:"julia", userId:"1234"},process.env.ACCESS_TOKEN_SECRET);
            res.json({accessToken:accessToken})
        // return res.cookie('accessToken', token, {
        //     expires: new Date(Date.now() + expiration),
        //     secure: false, // set to true if your using https
        //     httpOnly: true,
        //     });

})





app.listen(process.env.PORT, ()=>{
    console.log(`app listen on ${process.env.PORT}`);
})

