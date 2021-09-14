const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// dino 객체 생성
const dino = {                                          
  x:10,
  y:200,
  width:50,
  height:50,
  draw(){
    ctx.fillStyle = "green";
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}

// 장애물 객체 생성
class Cactus{
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = "red";
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
}

let timer = 0;
let cactusArray = [];

function dinoMove(){
  requestAnimationFrame(dinoMove);
  timer++;
  ctx.clearRect(0,0,canvas.width,canvas.height); 
  if(timer % 144 === 0){             //프레임
    const cactus = new Cactus();
    cactusArray.push(cactus);        //장애물 스폰 
  }

  cactusArray.forEach((a)=>{
    a.x--;
    a.draw();
  })
  dino.draw();
}
dinoMove()
