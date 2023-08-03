
const width = document.getElementById('canvas').width
const height = document.getElementById('canvas').height
const cell_size = 16;
const cell_dist = 4;
const total_cell_size = cell_size + cell_dist
const cellsPerRow = width / (cell_dist + cell_size)
const cellsPerCol = height / (cell_dist + cell_size)

let pause = true
let generations = 0;

let cells = []

function draw(){
    context.fillStyle = 'lightgray'
    context.fillRect(0,0,width,height)

    for(let i = 0; i < cellsPerCol; i ++){
        for(let j = 0; j < cellsPerRow; j ++){            
            context.fillStyle = cells[i][j].alive ? '#013220' : 'gray'
            context.fillRect(j * (cell_size + cell_dist), i * (cell_size + cell_dist), cell_size, cell_size);
        }
    }

    document.getElementById('gens_span').textContent = `Generations: ${generations}`
}

function execute(){

    if(pause){
        return
    }


    let cells_to_kill = []
    let cells_to_reborn = []

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
                       

            (cells[i][j].alive || (i == 2 && j == 2)) && console.log(i, j, nextToAlive)

            if(nextToAlive < 2 && cells[i][j].alive){
                cells_to_kill.push([i,j])
            }else if(nextToAlive == 3){
                cells_to_reborn.push([i,j])
            }else if(nextToAlive > 3 && cells[i][j].alive){
                cells_to_kill.push([i,j])
            }
            draw()
        } 
    }

    generations ++;
    cells_to_kill.forEach(cell => {
        console.log('killing: ', cell[0], cell[1])
        cells[cell[0]][cell[1]].alive = false
    });
    cells_to_reborn.forEach(cell => {
        console.log('rebirthing: ', cell[0], cell[1])
        cells[cell[0]][cell[1]].alive = true
    });

    draw()
}

function mouseUp(event){
    console.log(event.clientX, event.clientY)
    const x = event.clientX - window.scrollX
    const y= event.clientY - window.scrollY
    if(x < width && y < height){
        const i = ((x - x % total_cell_size) / total_cell_size)
        const j = ((y - y % total_cell_size) / total_cell_size)
        cells[j][i].alive = !cells[j][i].alive
        console.log(j, i)
    }
    draw()
}

function keyDown(event){
    const key = event.keyCode
    if(key == 32){
        pause = !pause
        document.getElementById('pause').textContent = pause ? 'paused - press space to unpause' : '';
        execute()
    }    
}


function start(){
    for(let i = 0; i < cellsPerCol; i ++){
        cells.push([])
        for(let j = 0; j < cellsPerRow; j ++){
            cells[i].push({alive: false})
        }
    }     
    cells = [
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": true
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ],
        [
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            },
            {
                "alive": false
            }
        ]
    ]   
    draw()
}