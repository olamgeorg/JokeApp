// var botom = 'black'
// const weather = 'cold';
// let fruit = 'mango';
// document.getElementById('jumbo').textContent='the answer '   +  (botom);
// document.getElementById('local').textContent='the answer  '   +  weather;
// document.getElementById('lunu').textContent='the answer '   +  fruit;


// let num1 = 10;
// let num2 = 20;
// const sum = (num1 + num2);

// document.getElementById('jumbo').innerHTML='The some of numbers is    '   + sum;

// let Home = 12;
// let home = 1;
// const both = (Home - home);
// alert(both);

// let age = 40;
// console.log(typeof(age));
// console.log(age)

// const name = 'john Do';
// console.log(typeof(name));
// console.log(name);

// let midleName = 'olamide';
// let Age = 20;

// if(Age >18 && Age <= 20){
//    document.getElementById('jumbo').innerHTML='You can apply' 

// }else if(Age ==19.5 && Age > 18.9 ){
//     document.getElementById('local').innerHTML='You can also apply for this course'
// }else{
//     document.getElementById('lunu').innerHTML='You cannot apply';
// }


// switch (fruit){
//     case 'banana':
//     console.log()
    
// }


//// PROPERTY IN JAVASCRIPT//////////

// const banana={
//     color: 'yellow',
//     size: 'Long',
//     quantity: 7,
//     sweet: 'bitter',
    
// }


// // console.log(banana)

// document.getElementById('jumbo').innerHTML=`The answer is  ${banana.color}`;
// document.getElementById('local').innerHTML=`The answer is  ${banana.size}`;
// document.getElementById('lunu').innerHTML=`The answer is  ${banana. quantity}`;
// document.getElementById('hook').innerHTML=`The answer is  ${banana.sweet}`;

////// USING  SWITCH&case /////

// switch(banana){
//     case 'color':
//         return 'red';
//         break;
//     case 'size':
//         return 'long';
//         break;
//     case 'quantity':
//         return 6;
//         break;
//     case 'tast':
//         return 'sweet';
//         break;
// }
// document.getElementById('lunu').innerHTML=('banana')

// var state = prompt(document.getElementById('jumbo').value);
// var capital = prompt(document.getElementById('jumbo').value)
// const nigeria={
//     state: 'lagos',
//     capital: 'ikeja',
// }
// document.getElementById('jumbo').innerHTML= ` The answer is 
//    ${nigeria.state}`;
// document.getElementById('local').innerHTML= ` The answer is 
//    ${nigeria.capital}`;          

//    const fName = 
//   document.getElementById("firstname");
//    const lName =
//    document.getElementById("lastname");
//    const btn = 
//    document.getElementById("btn");
//  const form =
//  document.getElementById("myForm");
//  const userInput = form.name.value;
//  console.log(userInput);


// const fName =   document.getElementById("firstname").value;
// console.log(fName);


// function getValue() {
//    const text = document.getElementById("firstname").value;
//    alert("The Name is " + text )
// }
// const text = prompt("Enter your name");
// console.log(text);

// const userInput = prompt(document.getElementById('jumbo'));




// MY NAME IS FOLASHADE I LIVE IN AMERICA



const url = 'https://v2.jokeapi.dev/joke/Any'
const joke = document.getElementById('joke')
fetch (url).then(data => data.json())
.then((item)=> 
   // (console.log(item.joke)
    joke.textContent = `${item.joke}`
)





