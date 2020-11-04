//SUM OF EVERY NUMBER TO 100

    // let number = 0;
    // let sum = 0;

    // while(true){
    //     number = number +1;
    //     sum = sum + number;
    //     if(number == 1000){
    //         break;
    //     }
    // }
    // console.log(sum);

//SUM OF ODD NUMBERS FROM 93 TO 845

    // let number = 93;
    // let sum = 0;

    // while(true){
    //     number = number +2;
    //     sum = sum + number;
    //     if(number >= 845){
    //         break;
    //     }
    // }

    // console.log(sum);

//PRODUCT OF EVERY NUMBER THAT IS DIVISIBLE BY 6 FROM 1 TO 400
    // let base = 1;
    // let product = 1;

    // for(let i = 1; i<= 400; i++){
    //     if((i % 6) == 0){
    //         product*=i;
    //     }
    //     }
    //     console.log(product);

//USE LOOP TO DETERMINE IF INPUT IS PRIME

    // let num = +prompt(`Enter Number`);
    // let output = true;
    
    // for(let i = 2 ; i < num ; i++){
    //     if(num%i == 0){
    //         output = false;
    //         break;
    //     }
    // }

    // console.log(output);

//FIND EVERY PRIME NUMBER FROM 1 TO 100

    // let string = [];

    // for(let number = 1; number < 100; number++){
    //     if(number ==1){
    //         string += "1, ";
    //         continue;
    //     }else if(number ==2){
    //         string += "2, ";
    //         continue;
    //     }
    //     for(i =2; i<number; i++){
    //         if(i == (number -1) || number == 1 || number == 2){
    //             string+= number + ", ";
    //             break;
    //         }else if(number% i == 0){
    //             break;
    //         }
    //     }
    // };

    // console.log(string);

//LOOP THAT FINDS FACTORAL OF A NUMBER THAT IS INUPT


    // let input = 5;
    
    // for(let i = (input -1); i>0; i--){
    //     input*= i;
    // };

    // console.log(input);

// Create a loop to find the greatest common factor of any 2 input numbers

    // let input1 = 18;
    // let array = 0;
    // let input2 = 24;

    // for(let i = 1; i<input1; i++){
    //     if(input1 % i == 0){
    //         if(input2 % i == 0){
    //             array = i;
    //         }
    //     };
    // };

    // console.log(array);

//CREATE A LOOP THAT WILL CREATE A DIAMOND THE SIZE OF X 

 //make a loop that will start at 1 and repeat until the i gets to 5 then the other loop will start and subtract from i to get back to 0

    let input = 5;
    let i = 1;
    let string = [];

    for(; i < 5; i++){
        for(let j = 0; j = i; j++){
            string.push("*");
        }
        console.log(string);
    };