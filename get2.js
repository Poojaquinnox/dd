// const express = require('express');
// let http=require('http');

// const app=express();

// let fs=require('fs');
// const { listeners } = require('process');

// app.get('/',(req,res)=>{
// http.createServer(function(req,res){

//     fs.readFile('/data.json',function(err,data){
//         if(err){
//             return console.log(err);
//         }
//         console.log('asyn data: '+data.toString());
//         res.write(data);

//         res.end();
//     });
// }).listen(8080);

// });
const express = require('express');
const bodyparser = require('bodyparser');

const app = express();
const PORT = 5000;

app.use(bodyparser.josn());

app.listen(PORT, () => console.log('server running on port'));