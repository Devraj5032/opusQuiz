const express = require('express')
const app = express()
const cors = require('cors')
const tableRoutes = require('./routes/tableRoutes')

app.use(cors())

app.use(express.json())
app.use('/' , tableRoutes)


app.listen(5000 , () => {
    console.log("server started at port 5000");
})