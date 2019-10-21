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
    let campos = new Array();
    campos.push({"A": $("#campo" + a).children().attr('src')});
    campos.push({"B": $("#campo" + b).children().attr('src')});
    campos.push({"C": $("#campo" + c).children().attr('src')});

    if((campos[0].A == campos[1].B) &&
       (campos[1].B == campos[2].C) &&
       (campos[0].A != undefined )  &&
       (campos[0].A != "")){

        if (campos[0].A.indexOf(CAMINHO_IMAGEM_JOGADOR_1) >= 0)
            vencedor = JOGADOR_1;
        else
            vencedor = JOGADOR_2;
        return true;

    }
    else {
        return false;
    }
}

function verificarFimDeJogo() {

    let jogada =  new Set();
    jogada.add([1,2,3]);
    jogada.add([4,5,6]);
    jogada.add([7,8,9]);
    jogada.add([1,4,7]);
    jogada.add([2,5,8]);
    jogada.add([3,6,9]);
    jogada.add([1,5,9]);
    jogada.add([3,5,7]);

    jogada.forEach(function(jogo){
        if(camposIguais(...jogo)){
            $("#resultado").html(imagemVencedor());
        }
    });
}

function reiniciar() {
    document.location.reload(true);
}

function imagemVencedor(venceu = vencedor){
    return `<img src='img/jogador${venceu}.png' >`;
}