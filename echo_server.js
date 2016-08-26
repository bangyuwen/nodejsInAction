var net = require('net');

var server = net.createServer(function(socket) {
  socket.once('data', function(data) {
    socket.write(data);
    console.log('success');
  });
});

server.listen(8888);
