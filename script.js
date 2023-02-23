function createGrid(length) {
    let grid = document.querySelector('.grid');
    let pixel = grid.querySelectorAll('div');
    pixel.forEach((div) => div.remove())
    grid.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${length}, 1fr)`;

    let pixels = length*length
    for(let i=0; i<pixels; i++) {
        let pixel = document.createElement('div');
        pixel.addEventListener("mouseover", colorPixel)
        pixel.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', pixel);
    }
}

function gridCheck(input) {
    if (input >= 2 && input <=100) {
        createGrid
    (input);
    } else {
        console.log('bad input')
    }
}

function colorPixel() {
    this.style.backgroundColor = "black"
}

let input = 16