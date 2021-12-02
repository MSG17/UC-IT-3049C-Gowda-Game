class Scene3 extends Phaser.Scene{
    constructor(){
      super("playGame");
    }
  
    create(){
      this.add.image(400, 300, 'sky');
      this.player = this.add.image(400, 475, 'player');
      //this.player.setScale(4);
      this.enemy = this.add.image(400, 175, 'enemy');
      //this.enemy.setscale(0.5);
    }

    update() {

        // 1.1 call a function to move the ships vertically
        this.moveShip(this.enemy, 1);
    
      }
    
      // 1.2 create the function to move the ships
      moveShip(ship, speed) {
        // increase the position of the ship on the vertical axis
        ship.y += speed;
        // if the ship hits the bottom of the screen call the reset function
        if (ship.y > config.height) {
          // 2.1 call a reset position function
          this.resetShipPos(ship);
        }
      }
    
      // 2.2 create the reset position function
      resetShipPos(ship){
        // put the ship on the top
        ship.y = 0;
        // put the ship on a random position on the x axis
        var randomX = Phaser.Math.Between(0, config.width);
        ship.x = randomX;
      }
  }