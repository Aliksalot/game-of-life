
const width = 600
const height = 600
const cell_size = 16;
const cell_dist = 4;
const total_size = cell_dist + cell_size;
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

	const cells_copy = cells
    for(let i = 0; i < cellsPerRow; i ++){
        for(let j = 0; j < cellsPerCol; j ++){            


            let nextToAlive = 0;

            if(i - 1 >= 0 && cells_copy[i - 1][j].alive){
                nextToAlive ++;
				console.log('checked 1', i, j) 
            }
            if(i + 1 < cellsPerRow && cells_copy[i + 1][j].alive){
                nextToAlive ++;
				console.log('checked 2', i, j)
            }
            if(j + 1 < cellsPerCol && cells_copy[i][j + 1].alive){
                nextToAlive ++;
				console.log('checked 3', i, j)
            }
            if(j - 1 >= 0 && cells_copy[i][j - 1].alive){
                nextToAlive ++;
				console.log('checked 4', i, j)
            }
            if(i - 1 >= 0 && j - 1 >= 0 && cells_copy[i - 1][j - 1].alive){
                nextToAlive ++;
				console.log('checked 5', i, j)
            }
            if(i + 1 < cellsPerRow && j + 1 < cellsPerCol &&cells_copy[i + 1][j + 1].alive){
                nextToAlive ++;
				console.log('checked 6', i, j)
            }
            if(i - 1 >= 0 && j + 1 < cellsPerCol && cells_copy[i - 1][j + 1].alive){
                nextToAlive ++;
				console.log('checked 7', i, j)
            }
            if(i + 1 < cellsPerRow && j - 1 >= 0 && cells_copy[i + 1][j - 1].alive){
                nextToAlive ++;
				console.log('checked 8', i, j)
            }
                       

            if(cells_copy[i][j].alive){
				console.log(i, j, nextToAlive)
			}

            if(nextToAlive < 2 || nextToAlive > 3){
                cells_copy[i][j].alive = false;
			}
            if(nextToAlive == 3){
				cells_copy[i][j].alive = true;
			}
        }
    }
	cells = cells_copy
    generations ++;
	draw()
}

function start(){
    for(let i = 0; i < cellsPerCol; i ++){
        cells.push([])
        for(let j = 0; j < cellsPerRow; j ++){
            cells[i].push({alive: false})
        }
    }
	draw()
}

function mouseUp(event){
    console.log(event.clientX, event.clientY)
    const x = event.clientX + window.pageXOffset;
    const y= event.clientY + window.pageYOffset;
    if(x < width && y < height){
		const cell_i = ((y - y % total_size) / total_size);
		const cell_j = ((x - x % total_size) / total_size);
		cells[cell_i][cell_j].alive = !cells[cell_i][cell_j].alive
		console.log(cell_i, cell_j);
    }
	draw()
}

function keyDown(event){
	console.log(`key pressed: ${event.keyCode}`)
	if(event.keyCode == '32'){
		pause = !pause
		document.getElementById('paused').textContent = pause ? 'paused' : '';
	}
}
	