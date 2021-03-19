let second = 30
const secondSpan = document.getElementById('second')
const startButton = document.getElementById('start')

function start () {
  const counter = setInterval(() => {
    second--
    secondSpan.innerHTML = second
  }, 1000)
  
  setTimeout(() => {
    clearInterval(counter)
    startButton.style.display = 'block'
    second = 0
    alert(`Sua pontuação foi de: ${score.textContent}`)
    second = 30
  }, 30000)
  currentScore = 0
  score.innerHTML = currentScore
}

startButton.onclick = () => {
  startButton.style.display = 'none'
  start()
}