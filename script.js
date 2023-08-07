let board = document.querySelector('.sketch-pad')
let buttons = document.querySelectorAll('button')
let selectBtn = document.querySelector('#select-btn')
const chooseColor = document.querySelector('#colorpicker');
let color = 'black'
let click = false

document.addEventListener('DOMContentLoaded', () => {
    // setGrid(4)

    document.querySelector('body').addEventListener('click', function(e){
        if (e.target.tagName != 'BUTTON'){
           click = !click
        }
    })
    selectBtn.addEventListener('click', () => {
        let size = choiceGrid()
        setGrid(size)
    })
    // console.log(board)
    setColor()
    
})

function setGrid(size){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows =  `repeat(${size}, 1fr)`

    let amntOfDivs = size * size
    for (let i =0; i < amntOfDivs; i++) {
        div = document.createElement('div')
        div.classList.add('clean')
        div.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement('beforeend', div)
    }
}

function choiceGrid(){
  let input = prompt('Pick the size of the grid; a value from 1 - 100')
  let messageEl = document.querySelector('#message')
  if (input === ''){
    messageEl.innerHTML = 'Please input a valid value'
   }else if (input <= 0 || input > 100){
    messageEl.innerHTML = 'Please input a value betwen 1 and 100'
    board.disabled = true
   } else {
    messageEl.innerHTML = 'now you can draw'
    return input
   }
}

function colorDiv(){
    if(click){
        if (color === 'rainbow'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else if (color === 'white') {
            this.style.backgroundColor = 'white'
        } else if (color === 'picker'){
            let newColor = document.getElementById('colorpicker').value;
            this.style.backgroundColor = newColor
            // console.log(newColor)
        } 
        else {
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice){
   color = colorChoice
}

function resetGrid(){
    let divs = document.querySelectorAll('.clean')
    divs.forEach(div => div.style.backgroundColor = 'white')    
}
