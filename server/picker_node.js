const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 7070

const db = mysql.createConnection({
    host :"localhost",
    user : "root",
    password:"admin",
    database:"emplyee"
})


db.connect(function(err){
    if(err){
        console.log("error",err)
    }
    console.log("DB is connected")
})


app.post(("/api/insert"),(req,res)=>{
try{

    const data = req.body
    console.log("data",data)
    res.status(201).json(data)
}catch(err){
    console.log(" error ocurr",err)
    res.status(500).json("error ocuure")
}
})

app.listen(PORT,()=>{
    console.log("server is listening port :",PORT)
})