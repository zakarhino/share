const Inert = require('inert');
const Good = require('good');

module.exports = function(server) {
  server.register({
    register: Good,
    options: {
      ops: {
        interval: 1000
      },
      reporters: {
        console: [{
          module: 'good-console'
        }, 'stdout']
      }
    }
  });
  server.register(Inert, () => {});
}