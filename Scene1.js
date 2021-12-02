class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload ()
    {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('player', 'assets/games/multi/ship.png');
        this.load.image('enemy', 'assets/sprites/ship.png');
        this.load.image('red', 'assets/particles/red.png');
        this.load.image('play_button', 'assets/world/play_button.png');
        this.add.text(20, 20, "Loading game...");
    }
  
    create() {

        this.add.text(350, 20, "Made With", {
            font: "25px Arial",
            fill: "yellow"
          });
  
        this.add.image(400, 100, 'logo');
  
        setTimeout(() => {
            this.scene.start('menu')
          }, 2000)
    }
  }