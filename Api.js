//two types of Api

// install to your extention = THUNDER CLIENT API.
// on your BROWSER type = v2.jokeapi.client
//FREE API and PAID they are called REST.
//api for weathers,joke,geting country,character,movies.

// NOTE!
//3 method of creating API= axios,fetch and asink await







// const url = 'https://v2.jokeapi.dev/joke/Any'
// const joke = document.getElementById('joke')
// const buton = document.getElementById('buton');


// let getJoke = ()=> { 
// fetch (url).then(data => data.json())
// .then((item)=> 
// {
//    // (console.log(item.joke)

//     joke.textContent = `${item.joke}`
// }
//   );

// }
// buton.addEventListener('click',getJoke());
// getJoke();


// const url = 'https://v2.jokeapi.dev/joke/Any'
// const joke = document.getElementById('joke')
// const btn = document.getElementById('btn')
// let getJoke =()=>{
//     fetch(url).then(data => data.json())
//     .then((item)=>{
//         joke.textContent=`${item.joke}`
//     })
// }
// btn.addEventListener('click', getJoke())
// getJoke();



const url = ''
const meal = document.getElementById('meal');
const btn = document.getElementById('btn');
let getJoke =()=>{
    fetch(url).then(data => data.json())
    .then((item)=>{
        meal.textContent = `${item.meal}`
    })
}
btn.addEventListener('click', getMeal());
getMeal();