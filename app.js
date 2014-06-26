//http server
var http = require('http');
var fs = require('fs');
//creating a server
server = http.createServer(function (request, response){
  response.writeHead(200, {'Content-type': 'text/html'});
  console.log('Request', request.url);
  if(request.url === '/'){
    fs.readFile('views/cars.html', 'utf8', function (errors, contents){
      response.write(contents); 
      response.end();
    });
  } else if(request.url === '/cats.html'){
    fs.readFile('views/cats.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  }else if(request.url === '/new_cars.html'){
    fs.readFile('views/new_cars.html', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }else if(request.url === '/images/download.jpg'){
    fs.readFile('./images/download.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  } else if(request.url === '/images/image_1.jpg'){
    fs.readFile('./images/image_1.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  } else if(request.url === '/images/images_2.jpg'){
    fs.readFile('./images/images_2.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  } else if(request.url === '/images/cat_1.jpg'){
    fs.readFile('./images/cat_1.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }else if(request.url === '/images/cat_2.jpg'){
    fs.readFile('./images/cat_2.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }else if(request.url === '/images/cat_3.jpg'){
    fs.readFile('./images/cat_3.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }else {
    response.end('What are you looking for?');
  }
});
server.listen(8000);
console.log("Running in localhost at port 8000");