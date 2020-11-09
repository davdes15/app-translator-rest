const express = require('express');
const axios = require('axios').default;
const cors=require('cors');
const bodyParser = require('body-parser')
const app=express();

app.use(cors());
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 

app.listen(3000, ()=>{
    console.log('Works');
})

app.post('/translate', function(req,res){
    let textToTranslate = req.body.text;
    let languageFrom = req.body.languageFrom;
    let languageTo = req.body.languageTo;
    axios.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl='+languageFrom+'&tl='+languageTo+'&dt=t&q='+encodeURI(
        textToTranslate)).then(
            (result)=>
            {
                res.send(JSON.stringify({data:result.data[0][0][0]}))
            }
        )
})

app.get('/test',function(req,res){
    res.send('a');
})