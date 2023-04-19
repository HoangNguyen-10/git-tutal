const http = require('http')
const server = http.createServer((req, res) => {
    console.log('run request..')
    res.setHeader('Content-Type', 'text/html')
    res.write('<h3>helo world</h3>')
    res.writeEarlyHints('<h2>from  hoi dan IT</h2>')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('nodejs is runing')
})