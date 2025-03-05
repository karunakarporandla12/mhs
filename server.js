const jsonServer = require("json-server");
const fs = require("fs");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Load and merge JSON files
const db = {
  ...JSON.parse(fs.readFileSync("db.json", "utf-8")),
  ...JSON.parse(fs.readFileSync("hospital.json", "utf-8")),
};

const router = jsonServer.router(db);

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});

//test for server-fix-data
