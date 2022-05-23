
let Blob;
let right = false;
let left = false;
let up = false;
let down = false;
let death = false
let reset = false;
let points = 0;
let mpoints = 0;
function preload() {
  img = loadImage('amogus.png');
  impasta = loadImage('impasta.png')
}
function setup() {
  // put setup code here
  createCanvas(800, 800)
  frameRate(200)
  //this is the whole mechanism with the attacker and the player
  Blob = new blob
}

function draw() {
  background(122.5, 255,0 )
  // Here we have the different Blobl features being run
  //This displays the blob
  Blob.show();
  //this moves the blob
  Blob.move();
  //this displays the attacker
  Blob.attacker();
  //this moves the attacker
  Blob.atmove();
  //And these makes the death and score work
  Blob.death();
  // Blob.score();
  if (points >= mpoints) { mpoints = points }
  textSize(32);
  text('Press r to restart', 1, height - 40)
  text('Score:' + points, 1, height - 10)

  text('High Score:' + mpoints, width / 2, height - 10)
}

function keyPressed() {
  //this gives the signal to the blob to start moving the opposite direction look at line 66 for more
  if (keyCode === RIGHT_ARROW) {
    up = true
  }
  if (keyCode === 82) { Blob = new blob; points = 0 }
}


class blob {
  //this shows all the differen blob values
  constructor() {
    this.ayr = height - 50
    this.x = 50;
    this.y = height / 2;
    this.yspeed = 3
    this.attackerx = width - 50
    this.attackery = random(50, this.ayr)
    this.attackery1 = random(height / 2, height - 50)
    this.axs = 3
    // points=0
    // this.mpoints=0

  }
  show() {
    rectMode(CENTER)
    image(img, this.x, this.y, 100, 100);

  };
  move() {
    // if(keyIsPressed&&keyCode===DOWN_ARROW){
    //   this.yspeed = this.yspeed+0.1
    // }
    // if(keyIsPressed&&keyCode===UP_ARROW){
    //   this.yspeed = this.yspeed-0.1
    // }
    if (up === true) {
      this.yspeed = this.yspeed * -1
      up = false
    }
    this.y = this.y + this.yspeed;
  };

  attacker() {
    image(impasta,this.attackerx, this.attackery)

    if (points >= 10) {
      this.ayr = height / 2 - 50
      image(impasta,this.attackerx, this.attackery1)


    }

  }
  atmove() {
    if (this.attackerx < -50) {
      this.attackery = random(50, this.ayr)
      this.attackery1 = random(height / 2, height - 50)
      this.attackerx = width + 50
      this.axs+=0.5
      points = points + 1

      if (this.yspeed <= 0) { this.yspeed = this.yspeed - 0.5 }
''
      if (this.yspeed >= 0) { this.yspeed = this.yspeed + 0.5 }
    }
    this.attackerx = this.attackerx - this.axs
  }

  death() {
    if (this.y < this.attackery + 50 && this.y > this.attackery - 25 && this.attackerx < 125) {
      console.log('dead')
      background(255)
      textSize(40);
      text('You died, Press r to restart', width / 2 - 100, height / 2 - 40)
      this.yspeed = 0
      this.axs = 0

    }
    if (this.y < this.attackery1 + 75 && this.y > this.attackery1 - 25 && this.attackerx < 125 && points >= 10) {
      console.log('dead')
      background(255)
      textSize(40);
      text('You died, Press r to restart', width / 2 - 100, height / 2 - 40)
      this.yspeed = 0
      this.axs = 0
    }

    if (this.y >= height - 25) {
      console.log('dead')
      background(255)
      textSize(40);
      text('You died, Press r to restart', width / 2 - 100, height / 2 - 40)
      this.yspeed = 0
      this.axs = 0
    }
    if (this.y <= 25) {
      console.log('dead')
      background(255)
      textSize(40);
      text('You died, Press r to restart', width / 2 - 100, height / 2 - 40)
      this.yspeed = 0
      this.axs = 0
    }
  }
//   score() {
//     if(points>=this.mpoints){this.mpoints=points}
//     textSize(32);
//     text('Press r to restart'  , 1, height - 40)
//     text('Score:' + points, 1, height - 10)
    
//     text('High Score:'+this.mpoints,width/2,height-10)

//   }
}
