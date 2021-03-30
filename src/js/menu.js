const menu = document.querySelector('.menu')
const secondSpan = document.getElementById('second')
const startButton = document.getElementById('start')

function decay (counter, second, score) {
  setTimeout(() => {
    clearInterval(counter)

    startButton.style.display = 'block'
    second = 0
    secondSpan.innerHTML = second

    alert(`Sua pontuação foi de: ${score.textContent}`)
    menu.classList.toggle('hide')
    startButton.style.display = 'grid'
  }, 30999)
}

function startGame () {
  let second = 30
  currentScore = 0
  score.innerHTML = currentScore
  
  const counter = setInterval(() => {
    second--
    
    second.toString().length == 1 ?
      secondSpan.innerHTML = `0${second}` :
      secondSpan.innerHTML = second
      return counter
    }, 1000)

  decay(counter, second, score)
}

startButton.onclick = () => {
  menu.classList.toggle('hide')
  startGame()
}