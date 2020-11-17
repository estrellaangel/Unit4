"use strict";

let randomNum = Math.ceil(Math.random()*100);
let newNum = Math.ceil(Math.random()*100);
document.getElementById("randomNum").textContent = randomNum;
let score = 0;
let Hstreak = 0;

function checkGthan(){
    if(randomNum < newNum){
        score++;
        document.getElementById("score").textContent = score;
        if(score > Hstreak){
            Hstreak = score;
            document.getElementById("streak").textContent = Hstreak;
        }
    }else{
        score = 0;
        document.getElementById("score").textContent = score;
    }
    randomNum = newNum;
    newNum = Math.ceil(Math.random()*100);
    document.getElementById("randomNum").textContent = randomNum;
};

function checkLthan(){
    if(randomNum > newNum){
        score++;
        document.getElementById("score").textContent = score;
        if(score > Hstreak){
            Hstreak = score;
            document.getElementById("streak").textContent = Hstreak;
        }
    }else{
        score = 0;
        document.getElementById("score").textContent = score;
    }
    randomNum = newNum;
    newNum = Math.ceil(Math.random()*100);
    document.getElementById("randomNum").textContent = randomNum;
};
