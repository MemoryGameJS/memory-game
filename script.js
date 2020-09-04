var cards = document.querySelectorAll('#cc');
var i = 0;
var j = 0;
var k = 0;
let count = 0;
let matches = 0;
let moves = 0;
var selectedColor = "";
var counter = 0;
var isclicked=false;
var arr=["gold","white","orange", "pink" ,"navy","red","blue","grey","yellow","cyan","green","ruby","gold","white","orange", "pink" ,"navy","red","blue","grey","yellow","cyan","green","ruby"];

const shuffle = (array) =>{
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  } 
  return array;
}
arr=shuffle(arr);
console.log(arr);


cards.forEach(c =>{
 // c.classList.add(arr[i%12]);
 console.log(c,arr[i]);
 c.classList.add(arr[i]);
 //console.log(c);
  i++;
});
var underprocess=false;
var firstclicked;
var toggled=[];
const clickFunction = (c) =>{
  if(underprocess)
  return;
  if(firstclicked===c)  // handling if the same card is clicked again 
  return;
  myPlay();
  c.className = c.className.replace("hidden","");
  toggled.push([c,c.classList[1]]);
  count++;
  if(!isclicked)
  {
  isclicked=true;
  firstclicked=c;
  return;
  }
  // secondclicked=c;
  if(count==2)
  {  
    firstclicked="";
    isclicked=false;
    underprocess = true;
    setTimeout(()=>{
      check(toggled,c);
      console.log(toggled);
      count=0;
      toggled = [];
      underprocess=false;
  
    },1100);
  }
}

cards.forEach(c => {
  c.addEventListener('click',(event) => clickFunction(c,event));
});
const check = (toggled,element) =>{
  //underprocess=true;
 
  if(toggled[0][1]==toggled[1][1])
  { 
    myWin();
   
      toggled[0][0].removeEventListener('click', clickFunction);
      toggled[1][0].removeEventListener('click', clickFunction);
      matches++;
      changescore(matches);
  // console.log(matches);
  }
  else{
    error();
    toggled[0][0].classList.add("hidden");
    toggled[1][0].classList.add("hidden");
  }
  moves++;
  let score=moves*10;
  let ele=document.getElementById("score").innerHTML;
  ele="score";
  underprocess=false;
}
var limit=120;
function startcountdown(){

  let ele=document.getElementById("timer");
  var rem=120-k;
  ele.innerHTML=rem;
  k++; 
}
 
startcountdown=setInterval(startcountdown,1000);

//   const iswon=(matches)=>{
//     if(matches==12)
//     {
//       //call the modal
//     }
//   }

function myPlay(){
  var audio = new Audio("button.mp3");
  audio.play();
}
function myWin()
{var audio = new Audio("win.mp3");
audio.play();
}
function error()
{ var audio = new Audio("erro.mp3");
audio.play();
}

function changescore(matches)
{
 var element=document.getElementById("scores");
element.innerHTML=matches*10;
console.log(element.innerHTML);

}