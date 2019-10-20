const JOGADOR_1 = "1";
const JOGADOR_2 = "2";
const CAMINHO_IMAGEM_JOGADOR_1 = "img/bolinha.png";

var vencedor = "";

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    verificarFimDeJogo();
}

function camposIguais(a, b, c) {
    let bgA = $("#campo" + a).children().attr('src');
    let bgB = $("#campo" + b).children().attr('src');
    let bgC = $("#campo" + c).children().attr('src');
    if ((bgA == bgB) &&
        (bgB == bgC) &&
        (bgA != undefined &&
            bgA != "")) {

        if (bgA.indexOf(CAMINHO_IMAGEM_JOGADOR_1) >= 0)
            vencedor = JOGADOR_1;
        else
            vencedor = JOGADOR_2;
        return true;
    } else {
        return false;
    }
}

function verificarFimDeJogo() {
    if (camposIguais(1, 2, 3) ||
        camposIguais(4, 5, 6) ||
        camposIguais(7, 8, 9) ||
        camposIguais(1, 4, 7) ||
        camposIguais(2, 5, 8) ||
        camposIguais(3, 6, 9) ||
        camposIguais(1, 5, 9) ||
        camposIguais(3, 5, 7)
    ) {
        $("#resultado").html(imagemVencedor());
    }
}

function reiniciar() {
    document.location.reload(true);
}

function imagemVencedor(venceu = vencedor){
    return `<img src='img/jogador${venceu}.png' >`;
}