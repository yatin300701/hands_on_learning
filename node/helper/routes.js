export const handleRequest = (params) => {
  if (params.method == "GET" && params.path == "/ping") {
    const response = {
      status: 200,
      statusText: "Ok",
      body: "pong",
    };
    console.log("response ", response);
    return response;
  }
};
