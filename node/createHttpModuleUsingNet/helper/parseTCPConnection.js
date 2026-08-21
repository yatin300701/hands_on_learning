// ┌───────────────────────┐
// │ GET /ping HTTP/1.1    │  ← request line
// ├───────────────────────┤
// │ Host: localhost:3000  │  ← headers
// │ User-Agent: curl/...  │
// │ Accept: */*           │
// ├───────────────────────┤
// │                       │  ← empty line
// └───────────────────────┘

// socket.on("data")
//        ↓
// parseTcpConnection(data)
//        ↓
// {
//   method,
//   path,
//   version,
//   headers
// }
//        ↓
// HTTP server logic

export const parseTcpConnection = (data) => {
  const request = data.toString();
  const requestLine = parseRequestLine(request);
  const headerKeys = parseHeaders(request);
  const header = {
    ...requestLine,
    headers: headerKeys,
  };
  console.log("headers", header);
  return header;
};

const parseRequestLine = (request) => {
  const requestLine = request.split("\r\n")[0];
  const [method, path, version] = requestLine.split(" ");
  return { method, path, version };
};

const parseHeaders = (request) => {
  const requestLineEnd = request.indexOf("\r\n");
  const headersEnd = request.indexOf("\r\n\r\n");

  const headers = request.slice(requestLineEnd + 2, headersEnd);

  const headerLines = headers.split("\r\n");
  const headerKeyValue = headerLines.map((h) => {
    const colnSpaceIndex = h.indexOf(":");
    const name = h.slice(0, colnSpaceIndex).trim();
    const value = h.slice(colnSpaceIndex + 1).trim();
    return [name, value];
  });

  return Object.fromEntries(headerKeyValue);
};
