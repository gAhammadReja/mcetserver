//imports
import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './routes/route.js'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import nodemailer from 'nodemailer'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//create express app
const app = express();
const PORT = process.env.PORT || 8000;

//connection to database
dotenv.config();
const dbusername = process.env.DB_USERNAME;
const dbpassword = process.env.DB_PASSWORD;
const emailPass = process.env.EMAILPASS;
Connection(dbusername,dbpassword);


//middle wayer to public folder
const staticPath = path.join(__dirname, '../client/build');
app.use(express.static(staticPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const validUsername = 'user123';
const validPassword = 'password123';

app.post('/admin', (req, res) => {
    const { username, password } = req.body;
    if (username === validUsername && password === validPassword) {
            res.sendFile(path.join(__dirname,'../client/build','index.html'))
    } else {
            res.status(401).sendFile(path.join(__dirname, 'public', 'Invalid Credentials.html'));          
    }
  });

app.use(cors());
app.use(express.json())
app.use('/', Routes);

// nodmailer
const contactEmail = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'bwebsite865@gmail.com',
    pass:emailPass,
  }
})
contactEmail.verify((error)=>{
  if (error) {
    console.log(error);
  } else {
    console.log('Ready To Send');
  }
})

app.get('/contact',(req,res)=>{
  res.sendFile(path.join(__dirname,'../client/build','index.html'))
})
app.post('/contact',(req,res)=>{
  const cname = req.body.cname;
  const cemail = req.body.cemail;
  const cmsg = req.body.cmsg;
  
  const TheMail = {
      from: cname,
      to:'bwebsite865@gmail.com',
      subject:'MCET USER CONTACT',
      html:`
      <h3>NAME : ${cname}</h3>
      <h3>EMAIL : ${cemail}</h3>
      <h3>MESSAGE : ${cmsg}</h3>
      `
  }
  contactEmail.sendMail(TheMail,(error)=>{
      if (error) {
          res.json({status:'Sorry We Are Unable To Send Your Message Now !'})
      } else {
          res.json({status:'Message Sent ! We Will Response Soon'})
      }
  });

});

app.use('/teachers', express.static('teachers'))
app.use('/students', express.static('students'))
app.use('/enrollnew', express.static('enrollNew'))
app.use('/notice', express.static('notice'))

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'pageNotFound.html'));
});
//listen server
app.listen(PORT, () =>{
    console.log(`Server Listening On Port Number http://localhost:${PORT}`)
});
