const fs = require('fs');
const path = require('path');
const getData = require('./queries/getData.js');
const resultsQuery = require('./queries/resultsQuery.js');
/*const env = require('env2').config();*/

const handleHome = (request, response) => {
    const filepath = path.join(__dirname, '..', 'public', 'landing.html');
    // getData((err, res) => {
    //     console.log(res)
    // });

    fs.readFile(filepath, (error, file) => {
        if (error) {
            response.writeHead(500, {
                'Content-Type': 'text/html'
            });
            response.end('<h1>Sorry we had a problem at our end</h1>')
        }
        else {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(file);
        }
    });
};

const handleLogin = (request, response, endpoint) => {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500, {'content-type': 'text/html'});
            res.end('<h1>We have an internal server error on our side!</h1>');
        }
        else {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(file);
        }
    });
}

const handleLogout = (request, response, endpoint) => {
    const filepath = path.join(__dirname, '..', 'public', 'landing.html');
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500, {'content-type': 'text/html'});
            res.end('<h1>We have an internal sevrer error on our side!</h1>');
        }
        else {
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(file);
        }
    });
}

const handlePublic = (request, response) => {
    const endpoint = request.url;
    const extension = endpoint.split('.')[1];
    const extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/js',
        json: 'application/json',
        png: 'image/png',
        jpg: 'image/jpeg',
        svg: 'image/svg+xml'
    }
    const filePath = path.join(__dirname, '..', endpoint);
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, {'Content-type': 'text/html'});
            response.end('<h1>Sorry, we had a problem at our end </h1>');
        }
        else {
            response.writeHead(200, {'Content-Type': extensionType[extension]});
            response.end(file);
        }
    });
}

const handleTable = (request, response) => {
    getData((err, res) => {
      if (err) console.log(err);
      else {
        const data = JSON.stringify(res);
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(data);
      }
    });
  };

const handleSelect = (request, response) => {
    let data = '';
    response.on('data', chunk => {
        data += chunk;
    })
    response.on('end', () => {
        
    })
//database queries
}

const handleA = (request, response) => {
resultsQuery.resultAlive((err,res) => {
    if (err) console.log(err);
    else {
        const data = JSON.stringify(res);
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(data);
    }
})
}

const handleD = (request, response) => {
resultsQuery.resultDead((err,res) => {
        if (err) console.log(err);
        else {
            const data = JSON.stringify(res);
            response.writeHead(200, {"Content-Type": "application/json"});
            response.end(data);
        }
    })
}
    

module.exports = {
    handleHome,
    handlePublic,
    handleSelect,
    handleTable,
    handleA,
    handleD,
    handleLogin,
    handleLogout
}