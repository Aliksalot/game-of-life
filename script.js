
const width = 600
const height = 600
const cell_size = 16;
const cell_dist = 4;
const cellsPerRow = width / (cell_dist + cell_size)
const cellsPerCol = height / (cell_dist + cell_size)

let pause = false
let generations = 0;

let cells = []

function draw(){
    context.fillStyle = 'lightgray'
    context.fillRect(0,0,width,height)

    for(let i = 0; i < cellsPerCol; i ++){
        for(let j = 0; j < cellsPerRow; j ++){            
            context.fillStyle = cells[i][j].alive ? 'green' : 'gray'
            context.fillRect(j * (cell_size + cell_dist), i * (cell_size + cell_dist), cell_size, cell_size);
        }
    }

    document.getElementById('gens_span').textContent = `Generations: ${generations}`
}

function execute(){

    if(pause){
        return
    }

    for(let i = 0; i < cellsPerCol; i ++){
        for(let j = 0; j < cellsPerRow; j ++){            


            let nextToAlive = 0;

            if(i - 1 >= 0 && cells[i - 1][j].alive){
                nextToAlive ++;
            }
            if(i + 1 < cellsPerCol && cells[i + 1][j].alive){
                nextToAlive ++;
            }
            if(j + 1 < cellsPerRow && cells[i][j + 1].alive){
                nextToAlive ++;
            }
            if(j - 1 >= 0 && cells[i][j - 1].alive){
                nextToAlive ++;
            }
            if(i - 1 >= 0 && j - 1 >= 0 && cells[i - 1][j - 1].alive){
                nextToAlive ++;
            }
            if(i + 1 < cellsPerCol && j + 1 < cellsPerRow &&cells[i + 1][j + 1].alive){
                nextToAlive ++;
            }
            if(i - 1 >= 0 && j + 1 < cellsPerRow && cells[i - 1][j + 1].alive){
                nextToAlive ++;
            }
            if(i + 1 < cellsPerCol && j - 1 >= 0 && cells[i + 1][j - 1].alive){
                nextToAlive ++;
            }
                       

            console.log(i, j, nextToAlive)

            if(nextToAlive < 2){
                cells[i][j].alive = false;
            }else if(nextToAlive == 3){
                cells[i][j].alive = true;
            }else if(nextToAlive > 3){
                cells[i][j].alive = false;
            }
        }
    }
    generations ++;
}

function start(){
    for(let i = 0; i < cellsPerCol; i ++){
        cells.push([])
        for(let j = 0; j < cellsPerRow; j ++){
            cells[i].push({alive: (Math.random() < 0.2)})
        }
    }    
}

function mouseUp(event){
    console.log(event.clientX, event.clientY)
    const x = event.clientX
    const y= event.clientY
    if(x < width && y < height){

    }
}