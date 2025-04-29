'use strict';

const Game = require('../modules/Game.class');
const game = new Game();

const startButton = document.querySelector('.start');

startButton.addEventListener('click', () => {
  if (!game.hasStarted) {
    game.start();
  } else {
    game.restart();
  }
});
