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
    // Increment the x according to the speed and delta time (the enemies will scroll from left to right)
    this.x += this.speed * dt;

    // Reset enemies on the start position with a random speed
    if (this.x > 520) {
        this.x = -100;
        this.speed = 150 + Math.floor(Math.random() * 300);
    };

    // Axis-Aligned Bounding Box to check the collisions between the player and the enemies
    if (player.x < this.x + 50 &&
        player.x + 50 > this.x &&
        player.y < this.y + 20 &&
        20 + player.y > this.y) {
        player.x = 205;
        player.y = 410;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Creation of the Player
const Player = function(x, y) {
    // Variables to determine the axis of the player object
    this.x = x;
    this.y = y;
    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-horn-girl.png';
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // Win the game and reset the player on the start position with a small delay
    if (this.y < -30 && this.y < 20) {
        setTimeout(function() {
            player.x = 205;
            player.y = 410;
        }, 500);

    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Function to make the player moves
// Different scenarios, use of switch case to control the player
// Impossible to move out of the canva
Player.prototype.handleInput = function(key) {
    switch (key) {
        case "up":
            if (this.y > 0) {
                this.y -= 90
            }
            break;

        case "down":
            if (this.y < 400) {
                this.y += 90;
            }
            break;

        case "right":
            if (this.x < 400) {
                this.x += 100;
            }
            break;

        case "left":
            if (this.x > 10) {
                this.x -= 100;
            }
            break;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];

// Place the player object in a variable called player
const player = new Player(205, 410);

// Place the enemies objects in a variables called enemyX
const enemy = new Enemy(-100, 130, 100);
const enemy2 = new Enemy(-260, 230, 300);
const enemy3 = new Enemy(-360, 50, 250);

// Push the 3 enemies in the empty allEnemies array
allEnemies.push(enemy, enemy2, enemy3);



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
