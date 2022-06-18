const http = require('http');

const server= http.createServer( (req,res)=>{
  if(req.url=== '/'){
    res.write('home page')
    res.end();
  }
  if(req.url==='/about'){
    res.end(`this is about page`)
  }
  res.end(`
  <h1> Oops!!! </h1>
  <p> this adrress ${req.url} does not exist </p>
  <a href = "/"> home page </a>
  `)
})

server.listen(5000);