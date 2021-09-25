const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/genera'
const alienRouter=require('./routers/datamed')
const app = express()

// mongoose.connect(url, {useNewUrlParser:true})
// const con = mongoose.connection

// con.on('open',() => {
//     console.log('connected!!')
// })
app.use(express.json())

app.use('/datamed',alienRouter)

// app.listen(9000, () => {
//     console.log('Server has started')
// })

const dbURI = 'mongodb+srv://nahid:Nahid@8686@GeneeraAdmin.w07kh.mongodb.net/medicine_info?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => { app.listen(3000);
 console.log("Database Connected");
}) // listen to requests only after dB is connected
  .catch((err) => console.log(err));