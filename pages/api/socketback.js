const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

let likes = 0;

io.on("connection", (socket) => {
  socket.emit('likeupdate', likes);

  socket.on('liked', () => {
    likes++;
    io.emit('likeupdate', likes);
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/joingame');
});
