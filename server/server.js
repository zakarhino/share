const Hapi = require('hapi');
const path = require('path');

// Configure server connections
const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, '../public')
      }
    }
  }
});

// Set up connection
server.connection({
  host: 'localhost',
  port: 3000
});

// Configure hapi plugins
require('./plugins.js')(server);

// Configure server routes
require('./routes.js')(server);

// Start server
server.start((err) => {
  if(err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});