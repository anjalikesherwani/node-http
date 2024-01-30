const http = require('http');
// const fs=require("fs");
// const server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/html'})
//     const myreadStream = fs.createReadStream(__dirname +  '/index.html','utf-8')
//     myreadStream.pipe(res)
// })

const server = http.createServer(function(req,res){
    res.end('welcome')
})

server.listen(3000)
console.log('server running on port 3000')