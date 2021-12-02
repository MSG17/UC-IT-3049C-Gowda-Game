class Scene2 extends Phaser.Scene{
    constructor(){
      super("menu");
    }
  
    create(){
        this.add.image(400, 300, 'sky');
        this.add.text(300, 100, "Shoot!", {font: "75px Arial", fill: "yellow"});
        this.add.text(175, 200, "Controls: arrow keys to move, space to fire", {font: "25px Arial", fill: "yellow"});
        const startButton = this.add.text(375, 250, 'Start', { font: "25px Arial", fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.scene.start('playGame') );
    }
  }