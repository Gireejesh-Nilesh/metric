let p = document.querySelector('p');
let text = p .innerHTML;

let characters = 'ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let iteration = 0;
function randomText(){
  let str = text.split("").map((char,idx)=>{
    if(idx < iteration) return char;
    return characters.split("")[Math.floor(Math.random()*52)];
  }).join("");
  p.innerHTML = str;
  iteration += 0.3;

  if (iteration >= text.length) {
    clearInterval(interval);  
  }
}

p.addEventListener('mouseenter', () => {
  iteration = 0;
  interval = setInterval(randomText, 25);
});