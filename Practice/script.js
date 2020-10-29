let x = 45;

45 + "2"; // + is a concatination operator, this will equal 452

// prompt(`the answer to x is ${x}`); // format for quotes and how to add in variables

console.log(``); // way for coder or anyone reading code to check for bugs and variables

let firstWord = "Super";
let secondWord = "supper";

console.log(`Orange is less then Oracle ${firstWord.toLowerCase() < secondWord.toLowerCase()}`);
console.log(`Orange is less then Oracle ${firstWord < secondWord}`);

console.log(`${4>24}`);

let check = false;

if(check == true){
    console.log(`it was true`);
};

if(check == false){
    console.log(`it was false`);
};

if("whatever") console.log(`this is true`);
if("whatevs") console.log(`this is falsy`);

if(check){
    console.log(`it was true`);
}else{
    console.log(`it was false`);
};

let score = 0;

let Ranswer1 = "Water";
let Ranswer2 = "Green";
let Ranswer3 = "7";
let Ranswer4 = "January";
let Ranswer5 = "Obama";

let Uanswer1 = prompt(`What is the earth's most abundent resource?`);
let Uanswer2 = prompt(`What does "G" stand for in "ROYGBIV"?`);
let Uanswer3 = prompt(`How many days of the week are there?`);
let Uanswer4 = prompt(`What is the 1st month of the year?`);
let Uanswer5 = prompt(`What was the 44th president's last name?`);

if(Ranswer1.toLowerCase() == Uanswer1.toLowerCase()){
    score++;
};

if(Ranswer2.toLowerCase() == Uanswer2.toLowerCase()){
    score++;
};

if(Ranswer3.toLowerCase() == Uanswer3.toLowerCase()){
    score++;
};

if(Ranswer4.toLowerCase() == Uanswer4.toLowerCase()){
    score++;
};

if(Ranswer5.toLowerCase() == Uanswer5.toLowerCase()){
    score++;
};

console.log(`Their score was ${score}/5`);