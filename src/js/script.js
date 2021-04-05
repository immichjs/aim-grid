const area = document.getElementById('area')
const score = document.querySelector('.score')


function createCircles () {
    const circle = document.createElement('div')

    circle.setAttribute('class', 'circle')
    circle.setAttribute('id', 'circle')
    circle.setAttribute('draggrable', 'false')

    return circle
}

function mathGen () {
    return Math.random() * (5 + 5) - 5
}

function gridGenerator () {
    return {
        col: mathGen(),
        row: mathGen()
    }
}

function clickCircle (param) {
    param.onclick = () => {
        area.removeChild(param)
        scorePoints()
        applyGridCircle()
    }
}


function applyGridCircle () {
    const circle = createCircles()
    const grids = gridGenerator()

    circle.style.gridColumn = Math.ceil(Math.abs(grids.col))
    circle.style.gridRow = Math.ceil(Math.abs(grids.row))
    
    area.appendChild(circle)
    
    clickCircle(circle)
}

let currentScore = 0

function scorePoints () {
    currentScore += Math.pow(2 * 2, 2)
    score.innerHTML = currentScore
}

applyGridCircle()
applyGridCircle()
applyGridCircle()
