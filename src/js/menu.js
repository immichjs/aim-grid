const menu = document.querySelector('.menu')
const secondSpan = document.getElementById('second')
const startButton = document.getElementById('start')

let second = 30

function start () {
  second = 30
  currentScore = 0
  score.innerHTML = currentScore
  
  const counter = setInterval(() => {
    second--

    if (second.toString().length == 1) {
      secondSpan.innerHTML = `0${second}`
    } else {
      secondSpan.innerHTML = second
    }
  }, 1000)
  
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

startButton.onclick = () => {
  menu.classList.toggle('hide')

  start()
}