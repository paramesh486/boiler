const Engine=  Matter.Engine
const World =  Matter.World
const Bodies=  Matter.Bodies

var engine, world;

var x;
var aditya=[];
var singh=[]

function setup() {
  createCanvas(1200,600);
engine=Engine.create();
world= engine.world;

x=6;
console.log(x);

aditya=["blue","yellow","cat","a"]
  
         
singh=[["student1","aditya"],["student2","ram"],["student3","pavan"],["student4","sandeep"]]
                


for(var e=0      ; e<4      ;  e=e+1      ){
console.log(singh[e][0]+"  "+singh[e][1])
}


}

function draw() {
  background("lightblue");  
Engine.update(engine);

console.log(aditya);
console.log(aditya[3])


}