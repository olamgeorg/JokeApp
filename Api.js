//two types of Api
//love my instructor
// install to your extention = THUNDER CLIENT API.
// on your BROWSER type = v2.jokeapi.client
//FREE API and PAID they are called REST.
//api for weathers,joke,geting country,character,movies.

// NOTE!
//3 method of creating API= axios,fetch and asink await



// i love this github
 //i like this
//money first bro


const url = 'https://v2.jokeapi.dev/joke/Any'
const joke = document.getElementById('joke')
const buton = document.getElementById('buton');


let getJoke = ()=> { 
fetch (url).then(data => data.json())
.then((item)=> 
{
   // (console.log(item.joke)
    //  learn more
    joke.textContent = `${item.joke}`
}
  );

}
buton.addEventListener('click',getJoke());
getJoke();

     
