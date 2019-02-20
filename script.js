const player1 = "X"
const player2 = "O"
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
            }

        }
        )
    }
}
