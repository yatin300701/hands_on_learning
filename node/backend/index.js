import net from "node:net";

const port = Number(process.argv[2]);

const server = net.createServer((socket) => {
  console.log(`[${port}] client connected`);

  socket.on("data", (data) => {
    console.log(`[${port}] received:`, data.toString());

    socket.write(`Hello from backend ${port}\n`);
  });

  socket.on("close", () => {
    console.log(`[${port}] client disconnected`);
  });
});

server.listen(port, () => {
  console.log(`Backend listening on ${port}`);
});
