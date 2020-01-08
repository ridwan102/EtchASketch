const container = document.querySelector('.container');

function createGrid(dimensions){

    //creates grid base on dimensions given
    //two loops required for width and height
    for (x = 0; x < dimensions; x++){
        for (y = 0; y < dimensions; y++){
            let gridBox = document.createElement('div');
            container.appendChild(gridBox);
        }   
    }

    //squares are selected as mouse hovers over them 
    const divs = document.querySelectorAll('.container div');
    divs.forEach(function(divs){
        divs.addEventListener('mouseover', function(e){
            e.target.classList.add('hover');
        });
    });
}

createGrid(16);

//function to clear grid
function clearGrid(){
    const divs = document.querySelectorAll('.container div');
    divs.forEach( function(e){
        e.parentNode.removeChild(e);
    });
}

//once button is clicked it runs function to clear and then create new grid 
const button = document.querySelector('button');
button.addEventListener('click', function(){

    //prompts user for new dimensions for grid
    let numSquares = prompt("How many squares for the new grid?");

    clearGrid();
    createGrid(numSquares);

    //ensures grid is sized properly 
    container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
});