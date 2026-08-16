export const handleSerialization = (data) => {
  const body = data.body;
  const contentLength = Buffer.byteLength(body);

  const statusLine = `HTTP/1.1 ${data.status} ${data.statusText}\r\n`;
  const contentLengthHeader = `Content-Length: ${contentLength}\r\n`;
  const respose = `${statusLine}${contentLengthHeader}\r\n${body}`;
  console.log("statusLine", respose);
  return respose;
};
