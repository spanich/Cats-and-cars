// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url==='/images/bmw_i8.jpg'){
        fs.readFile('./images/bmw_i8.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
        });
    }
    else if (request.url==='/images/audi_r8.jpg'){
        fs.readFile('./images/audi_r8.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
        });
    }
     else if (request.url==='/images/aventador.jpg'){
        fs.readFile('./images/aventador.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
        });
    }
    else if (request.url==='/cats'){
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
        });
    }
     else if (request.url==='/images/glasses.jpg'){
        fs.readFile('./images/glasses.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
        });
    }
     else if (request.url==='/images/ball.jpg'){
        fs.readFile('./images/ball.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
        });
    }
     else if (request.url==='/images/german.jpg'){
        fs.readFile('./images/german.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
        });
    }
    else if (request.url==='/cars/new'){
        fs.readFile('./views/forms.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
        });
    }

    else {
        response.writeHead(404);
        response.end("Requested URL not available");
    }
});
// tell your server which port to run on
server.listen(8000);
// print to terminal window
console.log("Running in localhost at port 8000");