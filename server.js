const Hapi  = require('hapi');
const good = require('good');
var unirest = require("unirest");
var port1= ~~process.env.PORT;


// create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: port1 ||8000,
    routes: { cors: true } 
});

// Add the route
server.route({
    method: 'GET',
    path: '/',
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }},
    handler: (request, reply) => {
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/popular");

req.query({
  "api_key": "f25cbbe44a5bb2e9f210c7a37901a845",
  "language": "en-US",
  "page": "1"
});

req.headers({
  "Postman-Token": "6f5e7285-867e-4942-9ff4-a93af40404aa",
  "Cache-Control": "no-cache"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
  return reply(res.body);

});
}});
// Add the route
server.route({
    method: 'GET',
    path: '/nowplaying',
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }},
    handler: (request, reply) => {
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/now_playing");

        req.query({
          "page": "1",
          "language": "en-US",
          "api_key": "f25cbbe44a5bb2e9f210c7a37901a845"
        });
        
          req.send("{}");
        
        req.end(function (res) {
          if (res.error) throw new Error(res.error);
        
          console.log(res.body);
          return reply(res.body);
        });
}});

// Add the route
server.route({
    method: 'GET',
    path: '/new',
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }},
    handler: (request, reply) => {
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/latest");

        req.query({
          "language": "en-US",
          "api_key": "f25cbbe44a5bb2e9f210c7a37901a845"
        });
        
          req.send("{}");
        
        req.end(function (res) {
          if (res.error) throw new Error(res.error);
        
          console.log(res.body);
          return reply(res.body)
        });
}});
// Add the route
server.route({
    method: 'GET',
    path: '/upcoming',
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }},
    handler: (request, reply) => {
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/upcoming");

req.query({
  "page": "1",
  "language": "en-US",
  "api_key": "f25cbbe44a5bb2e9f210c7a37901a845"
});

  req.send("{}");

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
  return reply(res.body);
});
}});
// Add the route
server.route({
    method: 'GET',
    path: '/toprated',
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }},
    handler: (request, reply) => {
        var req = unirest("GET", "https://api.themoviedb.org/3/movie/top_rated");

        req.query({
          "page": "1",
          "language": "en-US",
          "api_key": "f25cbbe44a5bb2e9f210c7a37901a845"
        });
        
          req.send("{}");
        
        req.end(function (res) {
          if (res.error) throw new Error(res.error);
        
          console.log(res.body);
  return reply(res.body);
});
}});
// set up logging
const options = {
    ops: {
        interval: 100000,
    },
    reporters: {
        consoleReporters: [
            { module: 'good-console' },
            'stdout',
        ],
    },
};

server.register({
    register: good,
    options,
}, (err) => {
    if (err) return console.error(err);
    
    // Start the server
    server.start((err) => {
        if (err) throw err;
        console.log(`Server running at: ${server.info.uri}`);
    });
});
