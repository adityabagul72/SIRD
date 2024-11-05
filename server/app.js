const express = require('express')
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const {connectDb}= require('./config/db.connect.js')
const cors =require('cors')
app.use(cors())

// importing routes 
const mouRoute = require('./routes/mou.route.js')
const studentRoute = require('./routes/student.route.js')

app.get('/',(req,res)=>res.send("working...."))

app.use('/api',mouRoute)
app.use('/api',studentRoute)

connectDb().then(()=>{
    app.listen(3000,()=>{
        console.log("Server working..")
    })
})
