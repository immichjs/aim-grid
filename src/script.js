const area = document.getElementById('area')
const score = document.getElementById('score')


function randomCircles () {
    let positionTop = Math.floor(Math.random() * (538 * 538) % 538)
    let positionLeft = Math.floor(Math.random() * (538 * 538) % 538)

    console.log(positionTop, positionLeft)
    
    const circle = document.createElement('div')
    circle.setAttribute('class', 'circle')
    circle.setAttribute('id', 'circle')
    circle.setAttribute('draggrable', 'false')
    circle.style.top = positionTop + 'px'
    circle.style.left = positionLeft + 'px'

    area.appendChild(circle)

    circle.onclick = () => {
        area.removeChild(circle)
        randomCircles()
        scorePoints()
    }
}

let currentValue = 0
function scorePoints () {
    currentValue += 1
    console.log(currentValue)
    score.innerText = currentValue
}
randomCircles()
randomCircles()
randomCircles()

setTimeout(function () {
    alert("Acabou o tempo, seu score foi: " + currentValue)
    currentValue = 0
    score.innerHTML = currentValue
}, 30000);