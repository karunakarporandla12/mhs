const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const userRouter = jsonServer.router(path.join(__dirname, 'db.json'));
const hospitalRouter = jsonServer.router(path.join(__dirname, 'hospital.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Use different routes for each JSON file
server.use('/users', userRouter);
server.use('/hospitals', hospitalRouter); 

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
