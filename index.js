let ascore = document.getElementById("ascore")
aresult = 0
bresult = 0

function aplusone(){
    aresult += 1
    ascore.textContent = aresult
}

function aplustwo(){
    aresult += 2
    ascore.textContent = aresult
}

function aplusthree(){
    aresult += 3
    ascore.textContent = aresult
}

let bscore = document.getElementById("bscore")
bresult = 0

function bplusone(){
    bresult += 1
    bscore.textContent = bresult
}

function bplustwo(){
    bresult += 2
    bscore.textContent = bresult
}

function bplusthree(){
    bresult += 3
    bscore.textContent = bresult
}

function clr(){
    aresult = 0
    bresult = 0
    ascore.textContent = aresult
    bscore.textContent = bresult
}