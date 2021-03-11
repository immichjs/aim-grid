const area = document.getElementById('area')
// const score = document.getElementById('score')

let col, row

function gridGen () {
    col = Math.random() * (4 + 4) - 4
    row = Math.random() * (4 + 4) - 4

    if (col <= 0 || row <= 0) {
        gridGen()
    }
}

function randomCircles () {
    const circle = document.createElement('div')
    circle.setAttribute('class', 'circle')
    circle.setAttribute('id', 'circle')
    circle.setAttribute('draggrable', 'false')
    
    gridGen()
    circle.style.gridColumn = Math.ceil(col)
    circle.style.gridRow = Math.ceil(row)

    area.appendChild(circle)

    circle.onclick = () => {
        area.removeChild(circle)
        console.log('Click efetuado')
        randomCircles()
    }

}

randomCircles()
randomCircles()
randomCircles()

// setTimeout(function () {
//     alert("Acabou o tempo, seu score foi: " + currentValue)
//     currentValue = 0
// }, 30000);