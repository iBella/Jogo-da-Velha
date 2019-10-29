import './css/index.css';
import './img/bolinha.png';
import './img/jogador1.png';
import './img/jogador2.png';
import './img/titulo.png';
import './img/xizinho.png';


const JOGADOR_1 = "1";
const JOGADOR_2 = "2";
const CAMINHO_IMAGEM_JOGADOR_1 = "img/bolinha.png";

var vencedor = "";

window.allowDrop = function allowDrop(ev) {
    ev.preventDefault();
}

window.drag = function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

window.drop = function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    verificarFimDeJogo();
}

window.camposIguais = function camposIguais(a, b, c) {
    let campos = new Array();

    let aa = document.getElementById("campo" + a).children[0] != null && document.getElementById("campo" + a).children[0] != undefined ? document.getElementById("campo" + a).children[0].src : "";
    let bb = document.getElementById("campo" + b).children[0] != null && document.getElementById("campo" + b).children[0] != undefined ? document.getElementById("campo" + b).children[0].src : "";
    let cc = document.getElementById("campo" + c).children[0] != null && document.getElementById("campo" + c).children[0] != undefined ? document.getElementById("campo" + c).children[0].src : "";

    campos.push({"A": aa});
    campos.push({"B": bb});
    campos.push({"C": cc});

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

window.verificarFimDeJogo = function verificarFimDeJogo() {

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
            document.getElementById("resultado").insertAdjacentHTML('beforeend', imagemVencedor());
        }
    });
}

window.reiniciar = function reiniciar() {
    document.location.reload(true);
};

window.imagemVencedor = function imagemVencedor(venceu = vencedor){
    return `<img alt='vencedor' src='img/jogador${venceu}.png' >`;
}