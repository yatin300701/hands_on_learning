import net from "node:net";

const PORTS = [5001, 5002, 5003];
let roundRobinIndex = 0;

function nextBackendPort() {
  return PORTS[roundRobinIndex++ % PORTS.length];
}

net
  .createServer((client) => {
    const upSteam = net.connect(nextBackendPort(), "127.0.0.1");

    client.pipe(upSteam);
    upSteam.pipe(client);

    const closeBoth = () => {
      client.destroy();
      upSteam.destroy();
    };

    client.on("error", closeBoth);
    upSteam.on("error", closeBoth);
  })
  .listen(8080, () => console.log("L4 balancer on :8080"));
