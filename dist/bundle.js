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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);