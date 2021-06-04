const cors=require("cors");
const express = require('express');
const sendmail = require('./utils/sendmail');


const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.status(200).send({message: 'OK'});
})
.post('/', async (req, res)=>{
    
   const email = req.body.data.email;
  console.log(email);

    sendmail(email).then((data)=>{
        console.log(data)
        if(!data){
            return res.status(503).send({message:"Error while Subscribing!",status:0})
            
        }

        res.status(200).send({message:"Thanks For Subscribing",status:1});

    })
    
})


const port  = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`Application running on port ${port}`);
});