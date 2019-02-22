const player1 = "X"
const player2 = "O"
let jogo = []
let playTime = player1;
let gameOver = false;

atualizarMostrador();
inicializarEspacos();

function atualizarMostrador() {
    if (gameOver) { return; }
    if (playTime == player1) {
        let player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "img/x.png");
    } else {

        let player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "img/o.jpg");
    }

}

function inicializarEspacos() {
    let espacos = document.getElementsByClassName("espacos");
    
    for (let i = 0; i < espacos.length; i++) {
        
        console.log(espacos[i]);
        espacos[i].addEventListener('click',function inicializarEspacos() {
            if (gameOver) { return }
            if (this.getElementsByClassName("img").length == 0) {

                if (playTime == player1) {

                    this.innerHTML = "<img src='img/x.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2

                } else {

                    this.innerHTML = "<img src='img/o.jpg'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;

                }
                atualizarMostrador();
                verificarVencedor();
            }

        });
        
    }
}

async function verificarVencedor(){
let a1 = document.getElementById("a1").getAttribute("jogada");
let a2 = document.getElementById("a2").getAttribute("jogada");
let a3 = document.getElementById("a3").getAttribute("jogada");

let b1 = document.getElementById("b1").getAttribute("jogada");
let b2 = document.getElementById("b2").getAttribute("jogada");
let b3 = document.getElementById("b3").getAttribute("jogada");

let c1 = document.getElementById("c1").getAttribute("jogada");
let c2 = document.getElementById("c2").getAttribute("jogada");
let c3 = document.getElementById("c3").getAttribute("jogada");

let vencedor = "";

if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3 ) || (a1==b2 && a1 == c3 )) && a1 != "") {
    vencedor = a1;
}else if((b2 == b1 && b2 == b3 && b2 !="") || (b2==a2 && b2==c2 && b2 !="") || (b2==a3 && b2==c1 && b2 !=""))
{
    vencedor == b2;
}else if(((c3==c2 && c3==c1) || (c3==a3 && c3==b3)) && c3 !="")
{
    vencedor = c3;
}

if (vencedor !="") {
    gameOver = true;

    await sleep(50);

    alert("O ganhador foi o: '" + vencedor + "'");
 
}

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




