const express = require('express')
const app = express()
const database = require('./db')
const questionRoutes = require('./routes/questionsRoutes')

app.use('/question' , questionRoutes)

app.listen(5000 , () => {
    console.log("server started at port 5000");
})