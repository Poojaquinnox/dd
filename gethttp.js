const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
app.get('/', (req,res) =>{
    res.json({name:'pooja', msg:'hello' , phoneNumber:090909090});
});

app.post('/contact', (req,res) =>{
    // res.send(req.body);
    if(!req.body.name) {
        return res.status(400).send('Name is required');
    }
    res.status(201).send('Thank you')
});

app.put('/post/:id', (req,res) =>{
    res.json({
        id: req.params.id,
        title:req.body.title
    });
app.delete('/post/:id', (req,res)=>{
res.json({msg: 'Post deleted'});
});

app.listen(5000, ()=> console.log('server started on port 5000'));