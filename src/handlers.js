const fs = require('fs');
const path = require('path');
const getData = require('./queries/getData.js');
const resultsQuery = require('./queries/resultsQuery.js');
const {dataStreamer} = require('./auth')
const querystring = require('querystring')
//const { readFIle } = require('fs');
// const cookie = require('cookie');
const jwt = require ('jsonwebtoken');
const env = require('dotenv').config()
const secret = process.env.SECRET

const handleHome = (request, response) => {
    const filepath = path.join(__dirname, '..', 'public', 'landing.html');

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
    // console.log(request.body);
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    dataStreamer(request, data => {
        parsedData=querystring.parse(data);
        // console.log({parsedData});
        let userName = parsedData.username;
        let passWord = parsedData.password;
        // console.log('This is userdata', userName, passWord); 
        // console.log(parsedData);

        const payload = {
            user: userName,
            pass: passWord
         };
        
        let tokenRes = '';
        
        jwt.sign(payload, secret, (err, result) => {
            if (err) {console.log(err);}
            else {tokenRes = result;
            };
        });

        fs.readFile(filePath, (err, file) => {
            if (err) {
                response.writeHead(500, {'content-type': 'text/html'});
                response.end('<h1>We have an internal server error on our side!</h1>');
            }
            else {
                response.writeHead(302, 
                    {'content-type': 'text/html',
                    'Location': '/game',
                    'Set-Cookie': `${userName}=${tokenRes}; Max-Age=9999`
                }
                    );
                response.end(file);
            }
    })
    
    
    });

}

const handleGame = (request, response, endpoint) => {
    // console.log(request.body);
    if(request.headers.cookie) {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
        fs.readFile(filePath, (err, file) => {
            if (err) {
                response.writeHead(500, {'content-type': 'text/html'});
                response.end('<h1>We have an internal server error on our side!</h1>');
            }
            else {
                response.writeHead(200, 
                    {'content-type': 'text/html'}
                    );
                response.end(file);
                // console.log(file);
            }
    
    })
    
}
else {
    response.writeHead(
      401,
      {
          'Content-Type': 'text/html'
      }
    ); 
    return response.end(console.log("you don't belong here"));
  }
    };


   const handleLogout = (request, response, endpoint) => {
       console.log('This is cookies', request.headers.cookie);
       let userName = request.headers.cookie.split('=')[0]
            response.writeHead(302, {'content-type': 'text/html',
            'Location': '/',
            'Set-Cookie': `${userName}=0; Max-Age=0`});
            response.end();
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
    handleGame,
    handleLogin,
    handlePublic,
    handleSelect,
    handleTable,
    handleA,
    handleD,
    handleLogout
}