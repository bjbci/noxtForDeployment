const express = require('express')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static("public"))

app.use(routes)

app.listen(PORT, () =>{
    console.log(`server listening at http://localhost:${PORT}`)
})