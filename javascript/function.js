
 
// function greet() {
//     console.log("Good Morning");
// }
// greet();

// function add(a, b) {
//    return a + b;
// }
// // console.log(add(5, 7));
// // even we can do this to
// // function add(a,b){
// // console.log(a+b)}
// // add(5,7); // by this you can add any number
// // add(67,87);

// function BMICalculator(weight, height) {
//     let bmi = weight / (height * height);
//     return bmi;
// }

// let bmi = BMICalculator(10, 1.5);
// if (bmi < 18.5) {
//     console.log("underweight");
// } else if (bmi < 24.9) {
//     console.log("healthy");
// } else if (bmi < 29.9) {
//     console.log("overweight");
// } else {
//     console.log("obese");
// }
// bmi=bmi.toPrecision(2);

// console.log(bmi);




// function calculate(num1, num2, operation) {
//     let result;

//     if (operation == 'add') {
//         result = num1 + num2;
//     } 
//     else if (operation == 'sub') {
//         result = num1 - num2;
//     } 
//     else if (operation == 'multiply') {
//         result = num1 * num2;
//     } 
//     else if (operation == 'divide') {
//         result = num1 / num2;
//         result = result.toPrecision(2);
//     } 
//     else {
//         console.log('Invalid operation');
//         return;
//     }

//     console.log(result);
// }

// calculate(26, 55, 'add');
// calculate(26, 55, 'sub');
// calculate(26, 55, 'multiply');
// calculate(26, 55, 'divide');



// function Calculator(num1,num2,operations) {
//     let result;
//     switch(operations) {
//         case 1: 
//         result = num1 + num2;
//             break;
//         case 2: 
//             result = num1 - num2;
//             break;
// case 3: 
//    result = num1 * num2;
// break;
// case 4: 
//      result = num1 / num2;
//      result = result.toPrecision(2);
//             break;
//         default:
//   console.log('Invalid operation');
//             return;
//     }
//     console.log(result);
// }

// Calculator(26, 55, 1); 
// Calculator(26, 55, 2); 
// Calculator(26, 55, 3); 
// Calculator(26, 55, 4); 



// const grreet= function(name)
// {
//     console.log('Hello' , name);
// }
// grreet('sita');

// function calculate(a,b,operation)
// {
//     return operation(a,b)
// }
// const add = function(num1, num2)
// {
//     return num1 + num2;
// }
// const sub = function(num1,num2)
// {
//     return num1 - num2;
// }

// const multiply = function(num1,num2)
// {
//     return num1 * num2 ;
// }

// const divide = function(num1, num2)
// {
//     return num1 / num2 ;
// }
// console.log(calculate(23, 45, add));
// console.log(calculate(32, 42, sub));
// console.log(calculate(43, 4, multiply));
// console.log(calculate(44, 3, divide));


// function sayhello()
// {
//     console.log('Hello');
// }

// function callMe(fn)
// {
//     fn()
// }

// callMe(function()
// {
//     console.log('hello world');
// });


// function greet ()
// {
//     console.log('hello');
// }


// function callMe(fn)
// {
//     fn();
// }
// callMe (greet);
 
//  const greet2  = function()
// {
//     console.log('Hello World');
// } 


// callMe (function ()
// {
//     console.log('Hello World')
// })

// callMe (greet2);


// const greet =() =>{
//     console.log('Hello');
//     console.log('Hello World');
// }
// greet();

// function callMe(fn) {
//     fn();
// }

// callMe(() => {
//     console.log('Hello World');
//     console.log('hey');
// });

// const arr = [1, 2, 4, 6, 8];
// for (let num of arr) {
//     console.log(num);
// }


// let a = [4, 8, 7, 13, 12]

// let sum = a.reduce(function (x, y) {
//     return x + y;
// }, 0);
// console.log(sum);

function sumArr(arr){

    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
     return sum
}
 console.log (sumArr([2,4,7,8,30,6]))


function reverseArr(arr) {
    return arr.reverse();
}
console.log(reverseArr([4,3,7,8,2,5]))




function reverseString(str)
{
    let newStr = str.split('').reverse().join('');
    return newStr;
}
 
console.log(reverseString('abcdefgh'))