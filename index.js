const express = require("express")

const server  = express()

const port  = 5000
server.listen(port, ( ) => {
    console.log("start",port);
})
server.get("/health", (req, res) => {
    res.send({status: "running"})
})
