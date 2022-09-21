var player
var ground                      
var snake
var brc
var lm1
var lm2
var grpl
var life,life2,life3
var lifeImage
var vidas = 3
var NPC
var snakes
var lms
var gameState ='PLAY'
var bg
var run


function preload(){

  lifeImage = loadImage('J_Ur_u.png')
  bg = loadImage('bg.gif')
  run = loadAnimation('Jungle Asset Pack/Character/sprites/run.gif')
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  

  player = createSprite(-windowWidth*1.8,700,50,50);
  player.addAnimation('run',run)
  player.scale = 2.5
  ground = createSprite(windowWidth/2,windowHeight- 40,windowWidth*5,40)
  ground.visible = false
  
  snakes = new Group()
  lms = new Group()
  
  
  
  grpl = new Group()
  life = createSprite(player.x,player.y- 600)
  life.addImage(lifeImage)
  life.scale = 0.3
  life2 = createSprite(player.x-80,player.y- 600)
  life2.addImage(lifeImage)
  life2.scale = 0.3
  life3 = createSprite(player.x- 160,player.y- 600)
  life3.addImage(lifeImage)
  life3.scale = 0.3
  NPC = createSprite( -1360,windowHeight- 80,50,50)
  NPC.shapeColor = 'blue'
  NPC.velocityX = 5

  Plataforma()
  snakebolada()
  snakes.setVelocityYEach(-6)
}

function draw() {
  background(bg); 

  player.velocityY +=1





  
  if(gameState == 'PLAY'){
    if(keyDown('D')){
      player.x = player.x + 3
    }
    if(keyDown('W')&& (player.collide(ground)|| player.collide(grpl))){
   player.velocityY = - 20
  
    }
    if(keyDown('A')){
      player.x = player.x - 3
    }
    if(keyDown('S')){
      player.y = player.y + 10         
    }
    camera.position.x = player.x   
    player.collide(ground)
    player.collide(grpl)
    drawSprites();
    
    
    snakes.bounceOff(lms)
  
    life.x = player.x
    life2.x = player.x - 80
    life3.x = player.x - 160
  
    if(vidas == 3 && player.collide(snakes)){
       
      life.visible = false
      player.x = player.x - 100
      setTimeout(() => {
        vidas = 2  
      }, 1000);
      
    }
    else if(vidas == 2 && player.collide(snakes)){
      life2.visible = false
      player.x = player.x - 100
      setTimeout(() => {
        vidas = 1  
      }, 1000);
    }
    else if(vidas == 1 && player.collide(snakes)){
      life3.visible = false
      player.x = player.x - 100
      setTimeout(() => {
        vidas = 0  
      }, 1000);
    } 
    
    if(vidas == 3 && player.isTouching(NPC)){
       
      life.visible = false
      player.x = player.x - 100
      setTimeout(() => {
        vidas = 2  
      }, 1000);
      
    }
    else if(vidas == 2 && player.isTouching(NPC)){
      life2.visible = false
      player.x = player.x - 100
      setTimeout(() => {
        vidas = 1  
      }, 1000);
    }
    else if(vidas == 1 && player.isTouching(NPC)){
      life3.visible = false
      player.x = player.x - 100
      setTimeout(() => {
        vidas = 0  
      }, 1000);
    } 
  
     if(NPC.x < -1800 || NPC.x > -900){
      NPC.velocityX *= -1
      
    }

  }
    if(vidas == 0){
      gameState = 'END' 
    }
    if(gameState == 'END'){
      textSize(60)
      text('Perdeu',player.x - 200,windowHeight/2)
      text('tente novamente :(',player.x - 200,windowHeight/2 + 100)

    }
 
}
function Plataforma(){

var x = 0 
for(var i = 0 ; i < 15; i++){
   var plataforma = createSprite(-windowWidth*1.55 + x,random(windowHeight- 200,windowHeight-300),100,20)
   x += 1000
   grpl.add(plataforma)
   plataforma.shapeColor =  'orange'
}

}
function snakebolada(){
  var x = 0 
  for(var i = 0 ; i < 10 ; i++){
 var snake = createSprite(-windowWidth*1.4 + x ,windowHeight-30,40,70)
 
 snake.shapeColor ='green'
 snakes.add(snake)
 
  var lm1 = createSprite(-windowWidth*1.4 + x,windowHeight -500,50,10) 
  lm1.visible = false
  var lm2 = createSprite(-windowWidth*1.4 + x,windowHeight +250,50,10)
 var brc = createSprite(-windowWidth*1.4 + x ,windowHeight-60,100,120)

   brc.visible = false
   x += 1350
   lms.add(lm1)
   lms.add(lm2)
  }

}





















