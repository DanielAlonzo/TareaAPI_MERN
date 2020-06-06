const express = require("express")
const server = express()
const api_cliente = require("./routes/api/cliente")

server.use(express.json())
server.use(api_cliente)

server.listen(3000, (err)=>{
    console.log("Express server running port 3000")
})