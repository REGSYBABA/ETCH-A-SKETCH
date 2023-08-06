let color = 'black'
let selectBtn = document.querySelector('#select-btn')
let board = document.querySelector('.sketch-pad')
let click = false

document.addEventListener('DOMContentLoaded', () => {
    
   document.querySelector('body').addEventListener('click', function(e){
     if (e.target.tagName != 'BUTTON'){
        click = !click
        // let drawEl = document.querySelector('#draw-mes')
        // if(click){
        //     drawEl.innerHTML = 'Draw till eternity'
        // }
        // else{
        //     drawEl.innerHTML = "You can't draw"
        // }
     }
   })

    selectBtn.addEventListener('click', function(){
        let size = choiceGrid()
        setGrid(size)
    })
    setColor()
    // resetGrid()
})
    
    

function setGrid(size){
    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows = `repeat(${size},1fr)`

    let amntOfBoxes = size * size
    for (let i = 0; i < amntOfBoxes; i++){
       let div = document.createElement('div')
        // div.style.backgroundColor = 'blue'
        div.addEventListener('mouseover', colorDiv)
        board.insertAdjacentElement('beforeend', div)
    }
}

function choiceGrid(){
   let input = prompt('Pick the size of the grid a value from 1 - 100')
   let messageEl = document.querySelector('#message')
   if (input === ''){
    messageEl.innerHTML = 'Please input a valid value'
   }else if (input < 0 || input > 100){
    messageEl.innerHTML = 'Please input a value betwen 1 and 100'
    // board.disabled = true
    // let nodes = document.querySelector(".sketch-pad").getElementsByTagName('*');
    // for(let i = 0; i < nodes.length; i++){
    //  nodes[i].disabled = true;
    // }
   } else {
    messageEl.innerHTML = 'now you can draw'
    return input
   }
}

function colorDiv(){
    if (click) {
        if (color === 'rainbow'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else if (color === 'white'){
        this.style.backgroundColor = 'white'
        } else {
            this.style.backgroundColor = 'black'
        }
    }    
}

function setColor(colorChoice){
    color = colorChoice
}

function resetGrid(){
    let divs = document.querySelectorAll('div')
    divs.forEach(div => div.style.backgroundColor = 'white')
}