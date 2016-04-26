// Enemies our player must avoid
var Enemy = function(x,y,speed) {
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
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.


    this.x += (Math.floor(this.speed * dt));


    if (this.x > ctx.canvas.width) {
        this.reset();
    }

};

Enemy.prototype.reset = function() {

  this.row = Math.floor(Math.random()*3) + 3;

  this.x = 0 - 100;
  this.y = (this.row * 83) - 20;

  this.speed = Math.floor(Math.random() * 400);
  console.log(this.speed);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};



Player.prototype.update = function(dt) {this.x += this.x + this.speed * dt;
};

Player.prototype.render = function(x,y) {
  this.x = 302;
  this.y = 485;
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.handleInput = function (keyCode){
  if(keyCode == 'left')
  { this.x -= 1}
  else if(keyCode == 'right')
  {this.x += 1}
  else if (keyCode == 'down')
  {this.y -= 1}
  else  {
   this.y += 1}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(403,395), new Enemy(302, 310), new Enemy (201,225)];

var player = new Player(302,485);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    Player.handleInput(allowedKeys[e.keyCode]);
});
