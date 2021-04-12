const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use('/api', router);

server.listen(PORT, (err) => {
  if (err) console.log('error:', err.message);
  console.log(`JSON Server is running on port: ${PORT}`);
});
