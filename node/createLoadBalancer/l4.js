import net from "node:net";

const PORTS = [5001, 5002, 5003];
let roundRobinIndex = 0;

function nextBackendPort() {
  return PORTS[roundRobinIndex++ % PORTS.length];
}

net
  .createServer((client) => {
    const backendPort = nextBackendPort();
    console.log(`Client connected -> backend ${backendPort}`);
    const upSteam = net.connect(backendPort, "127.0.0.1");

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

// working
// run 3 node servers on 5001, 5002, 5003
// by node index.js 5001 in node/backend folder

// run lb on 8001

// connect with lb by - nc 127.0.0.1 8080
// send data - 5001 will catch it

// connect again 5002 will catch it
