// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables to determine the axis and the speed of the enemy object
      this.x = x;
      this.y = y;
      this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


const Player = function(x, y) {
    // Variables to determine the axis of the player object
      this.x = x;
      this.y = y;
    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Function to make the player moves
// Different scenarios, use of switch case to control the player
Player.prototype.handleInput = function (key) {
switch (key) {
  case "up": player.y -= 100;
  break;

  case "down": player.y += 100;
  break;

  case "right": player.x += 100;
  break;

  case "left": player.x -= 100;
  break;
}
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];

// Place the player object in a variable called player
const player = new Player(205, 410);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
