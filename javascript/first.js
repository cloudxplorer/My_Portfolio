let str = 'Hello JavaScript . My name is Pallavi';
console.log(str.length);
console.log(str.slice(1,4));
console.log(str.includes ('Pallavi'));
console.log(str.includes('sita'));
console.log(str.split(' '));
console.log(str.split());
console.log(str.split('a'));


let str2 = '     Hello World    ';
let newstr2 = str2.trim();
console.log(str2);
console.log(newstr2);


let str3 = 'hello world';
console.log(str3.toUpperCase());
let str4 = 'HELLO WORLD';
console.log(str4.toLowerCase());


console.log(str.startsWith('H'));
console.log(str.startsWith('Hello'));


const newStr4 = str.replace('Pallavi' ,'gita');
console.log(newStr4);


const greet = 'Pallavi  ';
console.log(greet.repeat(4));
console.log(greet.concat(' Here!'));


let name = 'Ram' , age = 25 ;
console.log ('My name is '+ name +' and i am  '+ age + ' year old');
console.log(`my name is ${name} and i am ${age} years old`);
console.log(name[0]);
console.log(str.charAt(4));