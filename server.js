const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");

// Load both db.json and hospital.json
const router = jsonServer.router({
  users: require(path.join(__dirname, "db.json")), // Load users from db.json
  hospitals: require(path.join(__dirname, "hospital.json")) // Load hospitals from hospital.json
});

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
