const express=require('express')
const app=express();
const router=require('./Routes/routes')
const dotenv=require('dotenv').config()
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')

mongoose.connect(process.env.mongoURI_online).then(()=>{
    console.log("Db connected!!")
}).catch(()=>{
    console.log("Couldn't connect to db!")
})

app.use(cors({
    origin:['http://127.0.0.1:5173','https://deace.co','http://localhost:5173'],
    credentials:true,
}))
console.log("Checking")
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use(express.static('frontend/dist'))
app.use(express.static('frontend/public'))
app.use('/api',router)
app.use('*',(req,res)=>{
    res.sendFile('index.html',{root:'./frontend/dist'})
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})