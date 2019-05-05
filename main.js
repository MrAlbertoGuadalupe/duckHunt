
const duck = document.querySelector('#duck');
const score = document.querySelector('#score')
duck.addEventListener('click', () => {
  increaseScore();
  moveDuck();
})

function increaseScore() {
  const newScore = Number(score.innerHTML) + 1;
  score.innerHTML = newScore;
}

function moveDuck(){
  console.log('duck moved')
  const h = window.innerHeight - 100;
  const w = window.innerWidth - 100;
  duck.style.top = randomNum(h) + 'px';
  duck.style.left = randomNum(w) + 'px';
  console.log(w)
}
function randomNum(num){
  return Math.floor(Math.random() * num) + 1
}

setInterval(moveDuck, 3000)