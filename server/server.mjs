import express from 'express';
import createGame from '../public/game.js';
import http from 'http';
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const game = createGame();

game.addPlayer({ playerId: 'fylip', playerX: 1, playerY: 2 });
game.addPlayer({ playerId: 'tercio', playerX: 4, playerY: 2 });
game.addPlayer({ playerId: 'jean', playerX: 1, playerY: 4 });
game.addFruit({ fruitId: 'fruit1', fruitX: 4, fruitY: 3 });
game.addFruit({ fruitId: 'fruit1', fruitX: 2, fruitY: 2 });

console.log(game.state);

io.on('connection', (socket) => {
  const playerId = socket.id;

  console.log(`> Player connected on server with id: ${playerId}`);
});

server.listen(3000, () => {
  console.log('> Server listening on port: 3000');
})