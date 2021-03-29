const area = document.getElementById('area')
const score = document.querySelector('.score')

let col, row

function createCircles () {
    const circle = document.createElement('div')

    circle.setAttribute('class', 'circle')
    circle.setAttribute('id', 'circle')
    circle.setAttribute('draggrable', 'false')

    return circle
}

function gridGen () {
    col = Math.random() * (5 + 5) - 5
    row = Math.random() * (5 + 5) - 5
    
    if (col <= 0 || row <= 0) gridGen()
}

function clickCircle (param) {
    param.onclick = () => {
        area.removeChild(param)
        scorePoints()
        randomCircles()
    }
}

function randomCircles () {
    const circle = createCircles()
    
    gridGen()
    circle.style.gridColumn = Math.ceil(col)
    circle.style.gridRow = Math.ceil(row)
    
    area.appendChild(circle)
    
    clickCircle(circle)
}


function verifyGridArea () {
    for (let element in circles) {
        console.log(element)
    }
}

let currentScore = 0

function scorePoints () {
    currentScore += 1
    score.innerHTML = currentScore
}

randomCircles()
randomCircles()
randomCircles()
randomCircles()