// let num1  = 5;
// let num2 = 10;

// if(num1< num2){
//     console.log(`${num1}is smaller then ${num2}`);

// }
// else{
//     console.log (`{num2}is larger then ${num1}`);
// }

// let arr1=[2,,4,6,8,10]
// console.log(arr1);
// arr1.push[12];
// console.log(arr1);


// arr1.pop();
// console.log(arr1);

// arr1.shift();
// console.log(arr1);

// arr1.unshift();
// console.log(arr1);


// for (let step = 0; step < 5 ; step++)
//      {
//          console.log("Walking east one step");
//      }

//      let fruits = ["Apple" ,"Mango","Orange"];
// for (let i = 0; i < fruits.length; i++)
//     {console.log("Fruit at index" + i+ ":" + fruits[i]);} 


// const name = "Pallavi" ;
// let age = 22 ;
// let isstudent = true;
// let hobbies = ["dancing ","coding" , "reading"];
// console.log(name);
// console.log(age);
// console.log(isstudent)

// console.log(hobbies[0])



 const form= document.querySelector('#form');
 const name =document.querySelector('#name');
 const email = document.querySelector('#email');
 const message = document.querySelector('#message');
 form.addEventListener('submit' , (e) => {

    e.preventDefault();

    if(!name.value.trim())
    {
        alert ("Name is required");
    }
    else if (!name.value.length < 4)
 {
     alert ("Name should be at least of four letters");
    }
    else if(!email.value.trim())
    {
        alert ("Put the email");
    }


    else if(!message.value.trim())
    {
        alert("You must add message to send it!");
    }
     else if (message.value.length < 101) 
     {
        alert("Message should be small !");
     }
    else {
        alert('Form is submitted successfully ')
    }
 })


