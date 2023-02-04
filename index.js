let score = document.getElementById("score");
let timer = document.getElementById("timer");
let Squares = document.querySelectorAll(".square");
let mole = document.querySelector(".mole");
let Score = 0;
let hitSquare;
let count = 10;
let timerId=null;
let stopperId = null;

function random(){
    let randomSquare = Squares[Math.floor(Math.random()*9)];
    console.log(randomSquare)
    Squares.forEach(square => {
        square.classList.remove('mole');
        
        
    });
    hitSquare=randomSquare.id;
    randomSquare.classList.add("mole");

}
function  click(){
Squares.forEach(square =>{
    square.addEventListener("mousedown" , function(){
       if(square.id == hitSquare){
        Score++;
        score.innerText= Score;
        hitposition = null;

       }
      
    })
})
   
}
click()


function moveMole(){
   
    timerId = setInterval(random, 800);
    
    
    stopperId = setInterval(timeLapse,1000)
}

moveMole()

function timeLapse(){
   count--;
   timer.textContent = count;
   if(count==0){
     alert('Game over your Score is ' + Score);
     clearInterval(timerId);
     clearInterval(stopperId);
     Score = null
   }


}
 





