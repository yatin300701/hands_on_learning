const net = require("node:net");
const { parseTcpConnection } = require("./helper/parseTCPConnection");
const { handleRequest } = require("./helper/routes");
const { handleSerialization } = require("./helper/serialization");

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
      console.log("raw:", JSON.stringify(data.toString()));

      const header = parseTcpConnection(data);
      const response = handleRequest(header);
      const serialisedResponse = handleSerialization(response);
      console.log("ans", serialisedResponse);
      socket.write(serialisedResponse);
    });
  },
);

server.listen(3000);
