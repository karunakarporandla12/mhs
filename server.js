const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Load multiple JSON files
const userRouter = jsonServer.router(path.join(__dirname, 'db.json'));
const hospitalRouter = jsonServer.router(path.join(__dirname, 'hospital.json'));

// Use default middleware (CORS, logger, etc.)
server.use(middlewares);

// Use both routers with different base paths
server.use('/api', userRouter);
server.use('/api', hospitalRouter);

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
