const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// dino object 생성
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

// 장애물 object 생성
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

let timer = 0;            // 프레임
let jumptimer = 0;        // jump 프레임 시간
let cactusArray = [];
let jump = false;


function dinoMove(){
  requestAnimationFrame(dinoMove);
  timer++;
  ctx.clearRect(0,0,canvas.width,canvas.height); 
  if(timer % 120 === 0){             //프레임
    const cactus = new Cactus();
    cactusArray.push(cactus);        //장애물 스폰 
  }

  cactusArray.forEach((a,i,o)=>{
    if(a.x < 0){
      o.splice(i,1)
    }
    a.x--;
    a.draw();   
  })
  if(jump === true){
    dino.y-=1;
    jumptimer++;
  }
  if(jump === false){
    if(dino.y < 200){
      dino.y++;
    }
  }
  if(jumptimer > 100){
    jump = false;
    jumptimer = 0;
  }
  dino.draw();
}
dinoMove()

// jump event
document.addEventListener('keydown',function(e){
  if(e.code ==='Space'){
    jump = true; 
  }
})


