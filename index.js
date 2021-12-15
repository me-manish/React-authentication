const express= require('express');
const bodyParser= require('body-parser');
const nodemailer= require('nodemailer');
const cors =require('cors');
const { response } = require('express');

const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',()=>{
 resizeBy.send('welcone to my forma')
})

app.post('/api/forma', (req,res)=>{
   let data=req.body
   let smtpTransport = nodemailer.createTransport({
   service:'Gmail',
   port:465,
   auth:{
       user:'', //email id
       pass:'' //pass
     }
  });

let mailOptions={
 from:'', //put here email id same as auth
 to:data.Email, 
 subject:`Message from ${data.FullName}`,
 html:`
     <h3>Informations</h3>
     <ul>
        <li>Name: ${data.FullName}</li>
        <li>LastName: ${data.Job}</li>
        <li>Email: ${data.Pincode}</li>
     </ul>
     `
};

smtpTransport.sendMail(mailOptions ,(error,response)=>{
    if(error){
        res.send(error)
    }
    else{ 
        res.send('Success')
    }
})

smtpTransport.close();

})

const PORT=process.env.PORT||3001;

app.listen(PORT ,()=>{
    console.log(`server starting at port ${PORT}`);
})

















