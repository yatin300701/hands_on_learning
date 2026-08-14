const net = require("node:net");

const server = net.createServer(
  {
    highWaterMark: 1053,
  },
  (socket) => {
    console.log({
      remoteAddress: socket.remoteAddress,
      remotePort: socket.remotePort,
      localAddress: socket.localAddress,
      localPort: socket.localPort,
      limit: socket.readableHighWaterMark,
    });

    socket.on("data", (data) => {
      console.log("bytes:", data.length);
      console.log("data:", data.toString());
    });
  },
);

server.listen(3000);
