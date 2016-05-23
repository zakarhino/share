module.exports = function(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: {
      file: 'index.html'
    }
  });
  
  server.route({
    method: 'GET',
    path: '/code',
    handler: function(req, reply) {
      return reply('Hello world!');
    }
  });

  server.route({
    method: 'GET',
    path: '/file/{fileId}',
    handler: function(req, reply) {

    }
  })

  server.route({
    method: 'POST',
    path: '/upload',
    handler: function (req, reply) {
      console.log(req.body);
      reply("Got the information:", req.body);
    }
  });
}