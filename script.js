let width=500;
let height=700;

const container = document.querySelector('.container');
container.style.width= `${width}px`;
container.style.height= `${height}px`;

let gridSize = prompt("Please enter how many square per side, you would like the board to be. (1-100)");
  
if (gridSize > 100 || gridSize <1){
  alert("Please enter a valid number")
  gridSize = prompt("Please enter how many square per side, you would like the board to be. (1-100)");
  createBoard();
  }else{
  createBoard();
  }

function createBoard(){
  for (j=0; j<gridSize*gridSize;j++){
    
    const container = document.querySelector('.container');
    const div = document.createElement("div");
      div.classList.add("box");
      squareSize=width/gridSize;
      div.style.height=`${squareSize}px`;
      div.style.width = `${squareSize}px`;
    container.append(div)
      
  }
  function darken(){
    console.log(this);
    this.classList.add('select');
  }
  
  let fillIn = document.querySelectorAll('.box');
  //console.log(fillIn);
  fillIn.forEach(fillIn => fillIn.addEventListener('mouseover', darken));
}

//game();
