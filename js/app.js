// Enemies our player must avoid
var Enemy = function (x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.x = 0;
  this.y = 0;
  this.row = 0;
  this.speed = 0;
  this.sprite = 'images/enemy-bug.png';

  this.reset();

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.


  this.x += (Math.floor(this.speed * dt));


  if (this.x > ctx.canvas.width) {
    this.reset();
  }

};

Enemy.prototype.reset = function () {

  this.row = Math.floor(Math.random() * 3) + 3;

  this.x = 0 - 100;
  this.y = (this.row * 83) - 20;

  this.speed = Math.floor(Math.random() * 400 + 75);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
  this.x = 0;
  this.y = 0;
  this.row = 0;
  this.column = 0;

  this.sprite = 'images/char-boy.png';

  this.reset();
};


Player.prototype.update = function (dt) {
  this.x = this.column * 101;
  this.y = (this.row * 83) - 15;
};

Player.prototype.reset = function () {
  this.row = 6;
  //Randomize player's starting tile
  this.column = (Math.floor(Math.random() * 7));
};

Player.prototype.render = function (x, y) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyCode) {

  if (keyCode === 'left') {
    if (this.column > 0 && this.row > 3)
      this.column -= 1;
    console.log('col: ' + this.col + 'row:');
  } else if (keyCode === 'up') {
    if (player.column === bridge.column) {
      this.row -= 1;
    } else if (this.row > 3) {
      this.row -= 1;
    }
  } else if (keyCode === 'right') {
    if (this.column < 6 && this.row > 3)
      this.column += 1;
  } else if (keyCode === 'down') {
    if (this.row < 6)
      this.row += 1;
  }

};


var Bridge = function (x, y) {
  this.x = 0;
  this.y = 0;
  this.row = 0;
  this.column = 0;

  this.sprite = 'images/stone-bridge.png';

  this.reset();
};


Bridge.prototype.update = function (dt) {
  this.x = this.column * 101 + 4;
  this.y = (this.row * 83) - 40;
};

Bridge.prototype.reset = function () {
  this.row = 2;
  //Randomize player's starting tile
  this.column = (Math.floor(Math.random() * 7));
};

Bridge.prototype.render = function (x, y) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var bridge = new Bridge();
var allEnemies = [];
var numEnemies = 5;

for (i = 0; i < numEnemies; i++) {
  allEnemies.push(new Enemy(i));
}

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});




