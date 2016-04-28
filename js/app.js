// Enemies our player must avoid
var Enemy = function (x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images

  //Initialize the properties
  this.x = 0;
  this.y = 0;
  this.row = 0;
  this.speed = 0;
  this.sprite = 'images/enemy-bug.png';

  //Allow for use of the reset function on this class.
  this.reset();

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.

  //Keeps the speed of the bug constant, that is, not janky!
  this.x += (Math.floor(this.speed * dt));

  // If the bugs go "off canvas", they respawn (reset)
  if (this.x > ctx.canvas.width) {
    this.reset();
  }

};

Enemy.prototype.reset = function () {

  /*Decides a row to reset the bugs to, first number limits the possible rows to 3 rows,
   the second offsets the rows to the rows with stone.
  */
  this.row = Math.floor(Math.random() * 3) + 3;

  //Sets the x value to a negative, off the canvas.
  this.x = 0 - 100;
  //Sets the "row" to a pixel value consistent to the row, and
  this.y = (this.row * 83) - 20;

  /*This is basically the "pixels per second" or p/s equation. The first number (in this case, 400),
   creates a random number between 0 and 400. In order to keep the bugs from moving an extremely slow pace,
   we add 75 to whatever number comes up. This means that the bugs will never move slower than 75 p/s. so,
   you can increase either number, the first is the range, the second is the minumum.
  */
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

  //Initialize the properties
  this.x = 0;
  this.y = 0;
  this.row = 0;
  this.column = 0;

  this.sprite = 'images/char-boy.png';

  //Allow for use of the reset function on this class.
  this.reset();
};


Player.prototype.update = function (dt) {
  //Centers the player in particular column it is in when moved or respawned.
  this.x = this.column * 101;
  this.y = (this.row * 83) - 15;
};

Player.prototype.reset = function () {
  //Starts the player in the bottom row.
  this.row = 6;
  //Randomize player's starting tile
  this.column = (Math.floor(Math.random() * 7));
};

Player.prototype.render = function (x, y) {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (keyCode) {

  /**
   * CONTROLS MOVEMENT
   *
   * the if statements limit the movement of the player in two primary ways:
   *  - the player cannot move off the canvas
   *  - the player cannot cross water, unless the bridge is present
   *  - the player cannot move into water if on the bridge
   *
   */
  if (keyCode === 'left') {
    if (this.column > 0 && this.row > 2)
      this.column -= 1;
    console.log('col: ' + this.col + 'row:');
  } else if (keyCode === 'up') {
    if (player.column === bridge.column) {
      this.row -= 1;
    } else if (this.row > 3) {
      this.row -= 1;
    }
  } else if (keyCode === 'right') {
    if (this.column < 6 && this.row > 2)
      this.column += 1;
  } else if (keyCode === 'down') {
    if (this.row < 6)
      this.row += 1;
  }

};


var Bridge = function (x, y) {

  //Initialize the properties
  this.x = 0;
  this.y = 0;
  this.row = 0;
  this.column = 0;

  this.sprite = 'images/stone-bridge.png';

  //Allow for use of the reset function on this class.
  this.reset();
};


Bridge.prototype.update = function (dt) {

  //Centers the bridge in particular column it is in when "respawned".
  this.x = this.column * 101 + 4;
  this.y = (this.row * 83) - 40;
};

Bridge.prototype.reset = function () {

  //Sets the bridge starting in the second row
  this.row = 2;
  //Randomize the bridge's column
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

/* This is the number of active enemies on the game play at any given time. Increase the number for more enemies, decrease it for less.*/
var numEnemies = 5;

//Push the new Enemy to the allEnemies array
for (i = 0; i < numEnemies; i++) {
  allEnemies.push(new Enemy(i));
}

//instantiate a new player
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




