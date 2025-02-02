document.addEventListener("DOMContentLoaded", function(){
    boardSize(12)
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