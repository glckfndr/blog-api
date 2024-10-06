const http = require("http");
const app = require("./app");
const { port } = require("./config/keys");

// create a server and pass the express app as a callback
const server = http.createServer(app);

// listen to incoming requests
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
