 // Create web server
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
// Run the server
console.log('Server running at http://localhost:8080/');
 
 The above code creates a web server that listens on port 8080. When a request is received, the server reads the contents of the  index.html  file and sends it back as the response. 
 4. Node.js Example: Reading a File 
 In this example, we read the contents of a file using the  fs  module.