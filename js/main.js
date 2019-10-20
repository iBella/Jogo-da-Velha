var vez = 1;
var vencedor = "";

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    verificarFimDeJogo();
}

function camposIguais(a, b, c) {
    var campoA = $("#campo" + a);
    var campoB = $("#campo" + b);
    var campoC = $("#campo" + c);
    var bgA = $("#campo" + a).children().attr('src');;
    var bgB = $("#campo" + b).children().attr('src');;
    var bgC = $("#campo" + c).children().attr('src');;
    if ((bgA == bgB) &&
        (bgB == bgC) &&
        (bgA != undefined &&
            bgA != "")) {

        if (bgA.indexOf("img/bolinha.png") >= 0)
            vencedor = "1";
        else
            vencedor = "2";
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
        var venceu = "<img src='img/jogador" + vencedor + ".png' >";
        $("#resultado").html(venceu);
    }
}