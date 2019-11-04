/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_bolinha_png__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_bolinha_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_bolinha_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_jogador1_png__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_jogador1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_jogador1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_jogador2_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_jogador2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_jogador2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_titulo_png__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_titulo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_titulo_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_xizinho_png__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_xizinho_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_xizinho_png__);








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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bolinha.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jogador1.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jogador2.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/titulo.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/xizinho.png";

/***/ })
/******/ ]);