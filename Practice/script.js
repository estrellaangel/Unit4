// let x = 45;

// 45 + "2"; // + is a concatination operator, this will equal 452

// // prompt(`the answer to x is ${x}`); // format for quotes and how to add in variables

// console.log(``); // way for coder or anyone reading code to check for bugs and variables

// let firstWord = "Super";
// let secondWord = "supper";

// console.log(`Orange is less then Oracle ${firstWord.toLowerCase() < secondWord.toLowerCase()}`);
// console.log(`Orange is less then Oracle ${firstWord < secondWord}`);

// console.log(`${4>24}`);

// let check = false;

// if(check == true){
//     console.log(`it was true`);
// };

// if(check == false){
//     console.log(`it was false`);
// };

// if("whatever") console.log(`this is true`);
// if("whatevs") console.log(`this is falsy`);

// if(check){
//     console.log(`it was true`);
// }else{
//     console.log(`it was false`);
// };

// let score = 0;

// let Ranswer1 = "Water";
// let Ranswer2 = "Green";
// let Ranswer3 = "7";
// let Ranswer4 = "January";
// let Ranswer5 = "Obama";

// let Uanswer1 = prompt(`What is the earth's most abundent resource?`);
// let Uanswer2 = prompt(`What does "G" stand for in "ROYGBIV"?`);
// let Uanswer3 = prompt(`How many days of the week are there?`);
// let Uanswer4 = prompt(`What is the 1st month of the year?`);
// let Uanswer5 = prompt(`What was the 44th president's last name?`);

// if(Ranswer1.toLowerCase() == Uanswer1.toLowerCase()){
//     score++;
// };

// if(Ranswer2.toLowerCase() == Uanswer2.toLowerCase()){
//     score++;
// };

// if(Ranswer3.toLowerCase() == Uanswer3.toLowerCase()){
//     score++;
// };

// if(Ranswer4.toLowerCase() == Uanswer4.toLowerCase()){
//     score++;
// };

// if(Ranswer5.toLowerCase() == Uanswer5.toLowerCase()){
//     score++;
// };

// console.log(`Their score was ${score}/5`);

// if(name = "pam"){
//     console.log(`cool`);
// }else{
//     console.log(`not so cool`);
// }

// let result = (condition) ? "value1" : "value2";
// console.log(`${coolness}`);


// let a = 1;
// let b = 5;
// let result = (a + b < 4) ? "Below" : "Over";
// console.log(`${result}`)


// let message;
// let login;
// switch(login){
//     case (login = 'employee'):
//         message =`hello`;
//         break;
//     case (login = `Director`):
//         message = `greetings`;
//         break;
//     case(login = ``):
//         message = `no login`;
//         break;
//     default:
//         "";
// }
// let name;
// if (employee == true){
//     if(name == "karry" || name == "funzies"){
//         if(computer = "personal"){
            
//         }else if(computer == "work"){

//         }
//     }
// }

// let shirt = prompt(`What color is your shirt?`);
// if (shirt == "red" || shirt == "blue" || shirt == "orange"){
//     alert(`looking good!`);
// };

// let day = prompt(`Is it a week day?`);
// let hours;
// if (day = `yes`){
//     hours = prompt(`What time is it in military hours?`);
//     if (hours < 9 || hours > 17){
//         alert(`The store is closed`);
//     }else{
//         alert(`The store is open`);
//     }
// }else{
//     alert(`The store is open`);
// }

// let flatTire = prompt(`Do you have a flat tire?`);
// let engine = prompt(`Is your engine light on?`);
// let miles = prompt(`Have you driven 30,000+ miles?`);

// if(flatTire.toLowerCase() == "yes" || engine.toLowerCase() == "yes" || miles == "yes"){
//     alert(`You need to get your car cheecked`);
// }else{
//     alert(`Your okay`);
// };

// let pen = true;
// let paper = false;
// let mouse = true;
// let computer = false;

// if((pen && paper) || (mouse && computer)){
//     console.log(`You are ready`);
// }else{
//     console.log(`You are not ready`);
// };

// let tooLate = false;
// let tooManyGames = false;
// let didntStudy = true;
// let skipBreakfast = false;

// if(!tooLate && !tooManyGames && !didntStudy && !skipBreakfast){
//     console.log(`pass`);
// }else{
//     console.log(`yikes`);
// };

// alert(null || 2 || undefined);

// let value = undefined;
// console.log(value ?? `this is not defined`);

// let a = null;
// let b = undefined;
// let c = "";
// let d = "This is the last thing";

// console.log(a || b || c || d);

// for(let i = 1; i < 87; i++){
//     console.log(`This has happened ${i} times.`);
// };

// for(let i = 5; i <= 13; (i+=2)){
// console.log(`${i}`);
// };

// for(let i =5; i<=11; i++){
//     console.log(`${i}`);
// };

// for(let i = 1; i<=9; i++){
//     console.log(`this is nice`);
// };

// for(let i = 11; i>=1; i-=2){
//     console.log(`${i}`)
// }

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let num4 = 4;
// let num5 = 5;
// for(let i =1; i<=5; i++){
//     console.log(i);
//     if(num1 == i){
//         num1 =(Math.floor(Math.random() * 11));
//     }else if(num2 = i){
//         num2 =(Math.floor(Math.random() * 11));
//         if(num1 != num2){
//             continue;
//         }else{
//             num2 = (Math.floor(Math.random() * 11));
//         }
//     }else if(num3 = i){
//         num3 = (Math.floor(Math.random() * 11));
//         console.log("test");
//         if((num3 != num1) && (num3 != num2)){
//             continue;
//         }else{
//             num3 = (Math.floor(Math.random() * 11));
//         }
//     }else if(num4 = i){
//         num4 = (Math.floor(Math.random() * 11));
//         if(num4 = (num1 || num2 || num3)){
//             num4 = (Math.floor(Math.random() * 11));
//         }
//     }else if(num5 = i){
//         num5 = (Math.floor(Math.random() * 11));
//         if(num5 = (num1 || num2 || num3 || num4)){
//             num5 = (Math.floor(Math.random() * 11));
//         }
//     }
// };

// console.log(`${num1} ${num2} ${num3} ${num4} ${num5}`);

// let i = 0;
// while(i < 3){ //shows 0, then 1, then 2
//     //when i becomes 0, the condition becomes falsy
//     console.log(i);
//     i++;
// }

// let i =0;
// do{
//     console.log(i);
//     i++;
// }while(1<3);

// let sum = 0;
// let amount = 0;

// while(true){
//     let value = +prompt(`Enter a test score:`, `leave blank if done`);
//     if(!value) break;
//     sum += value;
//     amount ++;
// }

// let average = sum/amount;
// let grade = ``;
// if(average >= 90){
//     grade = `A`;
// }else if(average >= 80){
//     greade = `B`;
// }else if(average >= 70){
//     greade = `C`;
// }else if(average >= 60){
//     greade = `D`;
// }else if(average >= 50){
//     greade = `F`;
// };

// console.log(`Sum: ${sum}`);
// console.log(`Amount: ${amount}`);
// console.log(`Average: ${average}`);
// console.log(`Grade: ${average}`);

// main:for (let i = 0; i < 50; i ++){
//     if(i %2 == 1) continue main;
//     console.log(i);
// }
// let i,j;

// loopOuter:
// for(i =0; i<3; i++){
//     loopInner:
//     for(j=0; j<3; j++){
//         if(i == j){
//             continue loopOuter;
//         }else{
//             console.log(`Our i = ${i}, Our j = ${j}`);
//         };
//     };
// };

