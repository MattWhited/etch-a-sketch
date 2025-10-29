let size;


document.getElementById("select").onclick = function(){
    size = Number(document.getElementById('gridSize').value);
    console.log(size)
    boardSize(size)
}

document.addEventListener("DOMContentLoaded", function(){
    boardSize(size)
    console.log('farts')
})

function boardSize(size) {
    let main = document.querySelector(".main");
    main.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    main.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        main.insertAdjacentElement("beforeend", div);
    }
}

document.getElementById("black").onclick = function(){
    // add mouseover event
    //that turns the divs black
    // how do i access those divs?
}