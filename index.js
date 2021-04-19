const http = require('http');
const fs = require('fs');
const fetch = require("node-fetch");




const server = http.createServer((req, res) => {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            let stringedData = JSON.stringify(json, null, 2)
            fs.writeFileSync('post.json', stringedData)
        })
    res.writeHead(200)
    res.end('File created')
})


server.listen(8000, () => {
    console.log('Server is up and running')
})