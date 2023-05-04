const tiles = document.getElementsByClassName("tile");
const bf = document.getElementById("bf")
const uf = document.getElementById("uf")
let positions = ['','','','','','','','','']
let occupiedPositions = 0

document.getElementById("reset").onclick = function(){
    reset()
}

bf.onclick = function(){
    reset()
    playBotChance()
}

uf.onclick = function(){
    reset()
}

function initialiseGame(){
    for(let i = 0; i < 9; i++){
        tiles[i].onclick = function() {
            tiles[i].textContent = "X"
            positions[i] = 'X'
            tiles[i].onclick = null
            occupiedPositions++
            if(hasPlayerWon()){
                alert("Congratulations! You won!")
                return
            }
            playBotChance();
        }
    }
}

initialiseGame()

function reset(){
    positions = ['','','','','','','','','']
    occupiedPositions = 0
    for(let i = 0; i < 9; i++){
        tiles[i].textContent = ''
    }
    initialiseGame()
}

function playBotChance() {
    // console.log("bot play chance start: \n" + positions)
    // console.info(canBotWin())
    if(canBotWin() !== undefined){
        // console.log("bot win")
        setBotWinningChance(canBotWin()) 
    } else if(canPlayerWin() !== undefined) { 
        // console.log("player win")
        blockPlayerWinPosition(canPlayerWin()) 
    } else if(canBotMakeWinningCombination() !== undefined){
        // console.log("bot make combination: " + canBotMakeWinningCombination())
        makeWinningCombination(canBotMakeWinningCombination())
    } else if(occupiedPositions == 9) {
        // console.log("bot check draw")
        for(let i = 0; i < positions.length; i++){
            if(positions[i] == ''){
                tiles[position].textContent = 'O'
                positions[position] = 'O'
            }
        }
    } else {
        // console.log("bot play normal")
        playNormalChance()
    }
    if(hasBotWon()){
        alert("Alas! You couldn't defeat the bot!")
    }
    checkDraw()
    // console.log("bot play chance end: \n" + positions)
}

function checkDraw(){
    if(occupiedPositions == 9) alert("Its a draw!")
}

function hasPlayerWon(){
    if((positions[0] == 'X') && (positions[1] == 'X') && (positions[2] == 'X')){
        return 1
    }
    if((positions[0] == 'X') && (positions[3] == 'X') && (positions[6] == 'X')){
        return 1
    }
    if((positions[0] == 'X') && (positions[4] == 'X') && (positions[8] == 'X')){
        return 1
    }
    if((positions[1] == 'X') && (positions[4] == 'X') && (positions[7] == 'X')){
        return 1
    }
    if((positions[2] == 'X') && positions[5] == 'X' && (positions[8] == 'X')){
        return 1
    }
    if((positions[2] == 'X') && positions[4] == 'X' && (positions[6] == 'X')){
        return 1
    }
    if((positions[3] == 'X') && positions[4] == 'X' && (positions[5] == 'X')){
        return 1
    }
    if((positions[6] == 'X') && (positions[7] == 'X') && (positions[8] == 'X')){
        return 1
    }
    return 0
}

function hasBotWon(){
    if((positions[0] == 'O') && (positions[1] == 'O') && (positions[2] == 'O')){
        return 1
    }
    if((positions[0] == 'O') && (positions[3] == 'O') && (positions[6] == 'O')){
        return 1
    }
    if((positions[0] == 'O') && (positions[4] == 'O') && (positions[8] == 'O')){
        return 1
    }
    if((positions[1] == 'O') && (positions[4] == 'O') && (positions[7] == 'O')){
        return 1
    }
    if((positions[2] == 'O') && positions[5] == 'O' && (positions[8] == 'O')){
        return 1
    }
    if((positions[2] == 'O') && positions[4] == 'O' && (positions[6] == 'O')){
        return 1
    }
    if((positions[3] == 'O') && positions[4] == 'O' && (positions[5] == 'O')){
        return 1
    }
    if((positions[6] == 'O') && (positions[7] == 'O') && (positions[8] == 'O')){
        return 1
    }
    return 0
}

function canPlayerWin(){
    if((positions[0] == 'X') && (positions[1] == 'X') && (positions[2] == '')){
        return 2
    }
    if((positions[0] == '') && (positions[1] == 'X') && (positions[2] == 'X')){
        return 0
    }
    if((positions[0] == 'X') && (positions[1] == '') && (positions[2] == 'X')){
        return 1
    }


    if((positions[0] == 'X') && (positions[3] == 'X') && (positions[6] == '')){
        return 6
    }
    if((positions[0] == 'X') && (positions[3] == '') && (positions[6] == 'X')){
        return 3
    }
    if((positions[0] == '') && (positions[3] == 'X') && (positions[6] == 'X')){
        return 0
    }


    if((positions[0] == 'X') && (positions[4] == 'X') && (positions[8] == '')){
        return 8
    }
    if((positions[0] == '') && (positions[4] == 'X') && (positions[8] == 'X')){
        return 0
    }
    if((positions[0] == 'X') && (positions[4] == '') && (positions[8] == 'X')){
        return 4
    }


    if((positions[1] == 'X') && (positions[4] == 'X') && (positions[7] == '')){
        return 7
    }
    if((positions[1] == '') && (positions[4] == 'X') && (positions[7] == 'X')){
        return 1
    }
    if((positions[1] == 'X') && (positions[4] == '') && (positions[7] == 'X')){
        return 4
    }


    if((positions[2] == 'X') && positions[5] == 'X' && (positions[8] == '')){
        return 8
    }
    if((positions[2] == '') && positions[5] == 'X' && (positions[8] == 'X')){
        return 2
    }
    if((positions[2] == 'X') && positions[5] == '' && (positions[8] == 'X')){
        return 5
    }


    if((positions[2] == 'X') && positions[4] == 'X' && (positions[6] == '')){
        return 6
    }
    if((positions[2] == '') && positions[4] == 'X' && (positions[6] == 'X')){
        return 2
    }
    if((positions[2] == 'X') && positions[4] == '' && (positions[6] == 'X')){
        return 4
    }


    if((positions[3] == 'X') && positions[4] == 'X' && (positions[5] == '')){
        return 5
    }
    if((positions[3] == 'X') && positions[4] == '' && (positions[5] == 'X')){
        return 4
    }
    if((positions[3] == '') && positions[4] == 'X' && (positions[5] == 'X')){
        return 3
    }


    if((positions[6] == 'X') && (positions[7] == 'X') && (positions[8] == '')){
        return 8
    }
    if((positions[6] == 'X') && (positions[7] == '') && (positions[8] == 'X')){
        return 7
    }
    if((positions[6] == '') && (positions[7] == 'X') && (positions[8] == 'X')){
        return 6
    }
    return undefined
}

function canBotWin() {
    if((positions[0] == 'O') && (positions[1] == 'O') && (positions[2] == '')){
        return 2
    }
    else if((positions[0] == '') && (positions[1] == 'O') && (positions[2] == 'O')){
        return 0
    }
    else if((positions[0] == 'O') && (positions[1] == '') && (positions[2] == 'O')){
        return 1
    }


    else if((positions[0] == 'O') && (positions[3] == 'O') && (positions[6] == '')){
        return 6
    }
    else if((positions[0] == 'O') && (positions[3] == '') && (positions[6] == 'O')){
        return 3
    }
    else if((positions[0] == '') && (positions[3] == 'O') && (positions[6] == 'O')){
        return 0
    }


    else if((positions[0] == 'O') && (positions[4] == 'O') && (positions[8] == '')){
        return 8
    }
    else if((positions[0] == '') && (positions[4] == 'O') && (positions[8] == 'O')){
        return 0
    }
    else if((positions[0] == 'O') && (positions[4] == '') && (positions[8] == 'O')){
        return 4
    }


    else if((positions[1] == 'O') && (positions[4] == 'O') && (positions[7] == '')){
        return 7
    }
    else if((positions[1] == '') && (positions[4] == 'O') && (positions[7] == 'O')){
        return 1
    }
    else if((positions[1] == 'O') && (positions[4] == '') && (positions[7] == 'O')){
        return 4
    }


    else if((positions[2] == 'O') && positions[5] == 'O' && (positions[8] == '')){
        return 8
    }
    else if((positions[2] == '') && positions[5] == 'O' && (positions[8] == 'O')){
        return 2
    }
    else if((positions[2] == 'O') && positions[5] == '' && (positions[8] == 'O')){
        return 5
    }


    else if((positions[2] == 'O') && positions[4] == 'O' && (positions[6] == '')){
        return 6
    }
    else if((positions[2] == '') && positions[4] == 'O' && (positions[6] == 'O')){
        return 2
    }
    else if((positions[2] == 'O') && positions[4] == '' && (positions[6] == 'O')){
        return 4
    }


    else if((positions[3] == 'O') && positions[4] == 'O' && (positions[5] == '')){
        return 5
    }
    else if((positions[3] == 'O') && positions[4] == '' && (positions[5] == 'O')){
        return 4
    }
    else if((positions[3] == '') && positions[4] == 'O' && (positions[5] == 'O')){
        return 3
    }


    else if((positions[6] == 'O') && (positions[7] == 'O') && (positions[8] == '')){
        return 8
    }
    else if((positions[6] == 'O') && (positions[7] == '') && (positions[8] == 'O')){
        return 7
    }
    else if((positions[6] == '') && (positions[7] == 'O') && (positions[8] == 'O')){
        return 6
    }
    return undefined
}

function playNormalChance(){
    let random = Math.trunc(Math.random() * 8) + 1
    // attacking the corners and the centre
    // if nothing is empty, then play random chance on the edge
    if(positions[0] == '') {
        // console.log("bot pick top left")
        tiles[0].textContent = 'O'
        positions[0] = 'O'
    }
    else if(positions[2] == '') {
        // console.log("bot pick top right")
        tiles[2].textContent = 'O'
        positions[2] = 'O'
    }
    else if(positions[6] == ''){ 
        // console.log("bot pick bottom left")
        tiles[6].textContent = 'O'
        positions[6] = 'O'
    }
    else if(positions[8] == '') {
        // console.log("bot pick bottom right")
        tiles[8].textContent = 'O'
        positions[8] = 'O'
    }else if (positions[5] == ''){
        // console.log("bot pick centre")
        tiles[5].textContent = 'O'
        positions[5] = 'O'
    }else{
        // console.log("bot play random")
        for(let i = 0; i < 100; i++){
            if(positions[random] == ''){
                tiles[random].textContent = 'O'
                positions[random] = 'O'
                occupiedPositions++
                break
            }else{
                random = Math.trunc(Math.random() * 8) + 1
                // console.log("random iz" + random)
            }
        }
    }
}

function canBotMakeWinningCombination(){
  
    // diagonal
    if((positions[0] == 'O') && (positions[4] == '') && (positions[8] == '')){
        return 8
    }
    if((positions[0] == '') && (positions[4] == '') && (positions[8] == '')){
        return 0
    }
    if((positions[0] == '') && (positions[4] == 'O') && (positions[8] == '')){
        return 0
    }
    
    //diagonal
    if((positions[2] == '') && positions[4] == 'O' && (positions[6] == '')){
        return 6
    }
    if((positions[2] == 'O') && positions[4] == '' && (positions[6] == '')){
        return 6
    }
    if((positions[2] == '') && positions[4] == '' && (positions[6] == 'O')){
        return 2
    }

    // horizontal
    if((positions[3] == '') && positions[4] == 'O' && (positions[5] == '')){
        return 3
    }
    if((positions[3] == 'O') && positions[4] == '' && (positions[5] == '')){
        return 4
    }
    if((positions[3] == '') && positions[4] == '' && (positions[5] == 'O')){
        return 4
    }

    // horizontal
    if((positions[6] == 'O') && (positions[7] == '') && (positions[8] == '')){
        return 8
    }
    if((positions[6] == '') && (positions[7] == 'O') && (positions[8] == '')){
        return 6
    }
    if((positions[6] == '') && (positions[7] == '') && (positions[8] == 'O')){
        return 6
    }

    // horizontal
    if((positions[0] == 'O') && (positions[1] == '') && (positions[2] == '')){
        return 2
    }
    if((positions[0] == '') && (positions[1] == '') && (positions[2] == 'O')){
        return 0
    }
    if((positions[0] == '') && (positions[1] == 'O') && (positions[2] == '')){
        return 2
    }

    //vertical
    if((positions[0] == 'O') && (positions[3] == '') && (positions[6] == '')){
        return 6
    }
    if((positions[0] == '') && (positions[3] == 'O') && (positions[6] == '')){
        return 0
    }
    if((positions[0] == '') && (positions[3] == '') && (positions[6] == 'O')){
        return 0
    }

    // vertical
    if((positions[1] == 'O') && (positions[4] == '') && (positions[7] == '')){
        return 4
    }
    if((positions[1] == '') && (positions[4] == '') && (positions[7] == 'O')){
        return 4
    }
    if((positions[1] == '') && (positions[4] == 'O') && (positions[7] == 'O')){
        return 1
    }

    // vertical
    if((positions[2] == '') && positions[5] == 'O' && (positions[8] == '')){
        return 8
    }
    if((positions[2] == '') && positions[5] == '' && (positions[8] == 'O')){
        return 2
    }
    if((positions[2] == 'O') && positions[5] == '' && (positions[8] == '')){
        return 8
    }

    return undefined
}

function setBotWinningChance(position){
    tiles[position].textContent = 'O'
    positions[position] = 'O'
    occupiedPositions++
    tiles[position].onclick = null
}

function blockPlayerWinPosition(position){
    tiles[position].textContent = 'O'
    positions[position] = 'O'
    occupiedPositions++
    tiles[position].onclick = null
}

function makeWinningCombination(position){
    tiles[position].textContent = 'O'
    positions[position] = 'O'
    occupiedPositions++
    tiles[position].onclick = null
}
