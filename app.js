let gameSeq =[];

let userSeq = [];

let started =false;

let level=0;

let heading = document.querySelector("h2");

let btns = ["green","red","yellow","blue"];

let allBtns = document.querySelectorAll(".btn");

let body = document.querySelector("body");





document.addEventListener("keypress",function(){
      if(started==false){
        eventAdder();
        started=true;
        levelUp();
      }
});

function flashbtn(btnToflash){
    btnToflash.classList.add("flash");

    setTimeout(function(){
        btnToflash.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    
    heading.innerText=`level ${level}`;
     
    //to generate random nuber between 0 to 3
    //here the 4 is exclusive becaves 4*9 = 3.6 which is 3 in floor

    randInx = Math.floor(Math.random()*4);

    //choose the color at that random index

    let randColor = btns[randInx];

    gameSeq.push(randColor);
    
   

     //select the btn wich that color class

    let btnToflash = document.querySelector(`.${randColor}`);
    
   // call the flashbtn function
    flashbtn(btnToflash);

}

function btnPress(){
   
    let btn = this;

    let userPressColor =btn.getAttribute("id");

    userSeq.push(userPressColor);


    flashbtn(btn);

    checkGame(userSeq.length-1);
}

function checkGame(idx){



    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    

    }else{
        heading.innerHTML=`Game Over!!! your score was <b>${level}</b> <br>press any key to restart`;
        eventRemove();
        flashBody();
        gameReset();
    }
}


function gameReset(){

    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function flashBody(){


    body.classList.add("flash-body");

    setTimeout(function(){
       body.classList.remove("flash-body");
    },250);
}


function eventAdder(){
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
}

function eventRemove(){
    for(btn of allBtns){
        btn.removeEventListener("click",btnPress);
    }
}