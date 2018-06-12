const Hapi  = require('hapi');
const good = require('good');
var port1= ~~process.env.PORT;
music =  require('musicmatch')({apikey:"28ba71776f7f4615bf9a6c9504aaceda"});

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
        music.chartArtists({page:1, page_size:90, country:"us"})
    .then(function(data){
     return reply(data)
    })



    }


});

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
