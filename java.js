let size;


// board size selection
document.getElementById("select").onclick = function(){
    size = Number(document.getElementById('gridSize').value);
    console.log(size)
    boardSize(size)
}

document.addEventListener("DOMContentLoaded", function(){
    boardSize(size)
})


// create board / grid size
function boardSize(size) {
    let main = document.querySelector(".main");
    main.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    main.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        main.insertAdjacentElement("beforeend", div);
        div.setAttribute('class', 'pixel');
    }
}


// Black color button
document.getElementById("black").onclick = function(){
    let pixel = document.getElementsByClassName('pixel');
    Array.from(pixel).forEach(pix => {
        pix.addEventListener('mouseover', function() { pix.style.backgroundColor = 'black'})
    });
};


// Random color button
document.getElementById("random").onclick = function(){
    let pixel = document.getElementsByClassName('pixel');
    Array.from(pixel).forEach(pix => {
        pix.addEventListener('mouseover', function() { pix.style.backgroundColor = getRandomRgbColor()})
    });
};

// random color function
function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
