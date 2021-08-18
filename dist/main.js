/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _utils_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/player */ "./src/utils/player.js");
/* harmony import */ var _utils_boss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/boss */ "./src/utils/boss.js");



window.attack = attack;
window.togglePlay = togglePlay;
window.togglePlaySecond = togglePlaySecond;
window.togglePlayThird = togglePlayThird; // const battleMenu = document.getElementById("battleMenu")
// const attackBtnContainer = document.getElementById("attackBtnContainer")
// const attackBtn = document.getElementById("attackBtnContainer")

var canvas = document.getElementById("field");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
var boss = new _utils_boss__WEBPACK_IMPORTED_MODULE_2__.default();
var player = new _utils_player__WEBPACK_IMPORTED_MODULE_1__.default();
var deadFrog = {
  x: 700,
  y: 300,
  width: 50,
  height: 28
};
var deadTerra = {
  x: 700,
  y: 380,
  width: 48,
  height: 32
};
var battleTheme = document.getElementById("theme-music-1");
battleTheme.volume = 0.3;
var fightOn = document.getElementById("theme-music-2");
fightOn.volume = 0.3;
var jenovaAbsolute = document.getElementById("theme-music-3");
jenovaAbsolute.volume = 0.3;

function togglePlay() {
  if (battleTheme.paused) {
    battleTheme.play();
    fightOn.currentTime = 0;
    fightOn.pause();
    jenovaAbsolute.currentTime = 0;
    jenovaAbsolute.pause();
  } else {
    battleTheme.currentTime = 0;
    battleTheme.pause();
  }
}

function togglePlaySecond() {
  if (fightOn.paused) {
    fightOn.play();
    battleTheme.currentTime = 0;
    battleTheme.pause();
    jenovaAbsolute.currentTime = 0;
    jenovaAbsolute.pause();
  } else {
    fightOn.currentTime = 0;
    fightOn.pause();
  }
}

function togglePlayThird() {
  if (jenovaAbsolute.paused) {
    jenovaAbsolute.play();
    battleTheme.currentTime = 0;
    battleTheme.pause();
    fightOn.currentTime = 0;
    fightOn.pause();
  } else {
    jenovaAbsolute.currentTime = 0;
    jenovaAbsolute.pause();
  }
}

var bossSprite = new Image();
bossSprite.src = "./src/utils/assets/boss.gif";
var background = new Image();
background.src = "./src/utils/assets/background.gif";
var playerSprite = new Image();
playerSprite.src = "./src/utils/assets/Crono.gif";
var deadSprite1 = new Image();
deadSprite1.src = "./src/utils/assets/Frog.gif";
var deadSprite2 = new Image();
deadSprite2.src = "./src/utils/assets/Terra.gif";
var attackAudio = new Audio();
attackAudio.src = "./src/utils/assets/attack.mp3";
var bossAttAudio = new Audio();
bossAttAudio.src = "./src/utils/assets/boss.mp3";
var lossAudio = new Audio();
lossAudio.src = "./src/utils/assets/loss.mp3";
var victoryAudio = new Audio();
victoryAudio.src = "./src/utils/assets/victory.mp3";
document.addEventListener("DOMContentLoaded", function (event) {
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(bossSprite, boss.x, boss.y, boss.width, boss.height);
    ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);
    ctx.drawImage(deadSprite1, deadFrog.x, deadFrog.y, deadFrog.width, deadFrog.height);
    ctx.drawImage(deadSprite2, deadTerra.x, deadTerra.y, deadTerra.width, deadTerra.height);
    requestAnimationFrame(animate);
  }

  animate();
});

function resetPlayer() {
  player.x = 700;
} //attack


function attack() {
  player.x = 600;
  attackAudio.play();
  var hitChance = Math.round(Math.random() * 10);

  if (hitChance >= 4) {
    var dmg = Math.round(Math.random() * 10) + player.dmg; //append div?

    boss.hp -= dmg;

    if (boss.hp < 0) {
      boss.hp = 0;
    }

    var text = document.createElement("div");
    var body = document.querySelector("body");
    text.classList.add("dmg-text");
    text.append("You dealt ".concat(dmg, " dmg to Recursion, Recursion now has ").concat(boss.hp, " hp! "));
    body.append(text);
    setTimeout(function () {
      text.remove();
    }, 2000);
  } else {
    var _text = document.createElement("div");

    var _body = document.querySelector("body");

    _text.classList.add("miss-text");

    _text.append("You missed! You dealt 0 dmg to the boss, the boss now has ".concat(boss.hp, " hp! "));

    _body.append(_text);

    setTimeout(function () {
      _text.remove();
    }, 2000);
  }

  setTimeout(resetPlayer, 700);
  setTimeout(function () {
    var button = document.getElementById("attackBtn");
    button.disabled = true;
    boss.attack(player);
    bossAttAudio.play();
  }, 2000);
  button.disabled = false;

  if (boss.hp <= 0) {
    winGameOver();
  } else if (player.hp <= 0) {
    loseGameOver();
  }
}

function loseGameOver() {
  var text = document.createElement("div");
  var body = document.querySelector("body");
  text.classList.add("game-over");
  text.append("Game Over! You have ".concat(player.hp, " hp left! "));
  body.append(text);
  battleTheme.currentTime = 0;
  battleTheme.pause();
  fightOn.currentTime = 0;
  fightOn.pause();
  jenovaAbsolute.currentTime = 0;
  jenovaAbsolute.pause();
  lossAudio.play();
  var button = document.getElementById("attackBtn");
  button.disabled = true;
}

function winGameOver() {
  var text = document.createElement("div");
  var body = document.querySelector("body");
  text.classList.add("game-over");
  text.append("You have defeated Recursion!");
  body.append(text);
  battleTheme.currentTime = 0;
  battleTheme.pause();
  fightOn.currentTime = 0;
  fightOn.pause();
  jenovaAbsolute.currentTime = 0;
  jenovaAbsolute.pause();
  victoryAudio.play();
  var button = document.getElementById("attackBtn");
  button.disabled = true;
}

/***/ }),

/***/ "./src/utils/boss.js":
/*!***************************!*\
  !*** ./src/utils/boss.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/utils/player.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Boss = /*#__PURE__*/function () {
  function Boss(props) {
    _classCallCheck(this, Boss);

    this.x = 100, this.y = 150, this.width = 240, this.height = 256, this.hp = 100, this.mp = 9999, this.dmg = 11;
    this.reset = this.reset.bind(this);
  }

  _createClass(Boss, [{
    key: "reset",
    value: function reset() {
      this.x = 100;
    }
  }, {
    key: "attack",
    value: function attack(player) {
      this.x = 200;
      var hitChance = Math.round(Math.random() * 10);

      if (hitChance >= 3) {
        var dmg = Math.round(Math.random() * 10) + this.dmg;
        player.hp -= dmg;

        if (player.hp <= 0) {
          player.hp = 0;
        }

        var text = document.createElement("div");
        var body = document.querySelector("body");
        text.classList.add("boss-dmg-text");
        text.append("Recursion dealt ".concat(dmg, " to you, you have ").concat(player.hp, " hp remaining!"));
        body.append(text);
        setTimeout(function () {
          text.remove();
        }, 2000);
      } else {
        var _text = document.createElement("div");

        var _body = document.querySelector("body");

        _text.classList.add("boss-miss-text");

        _text.append("Recursion missed! You have ".concat(player.hp, " hp remaining!"));

        _body.append(_text);

        setTimeout(function () {
          _text.remove();
        }, 2000);
      }

      setTimeout(this.reset, 700);
    }
  }]);

  return Boss;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Boss);

/***/ }),

/***/ "./src/utils/player.js":
/*!*****************************!*\
  !*** ./src/utils/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(props) {
  _classCallCheck(this, Player);

  this.x = 700, this.y = 200, this.width = 62, this.height = 62, this.hp = 100, this.mp = 999, this.dmg = 10;
};

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvLi9zcmMvdXRpbHMvYm9zcy5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhdHRhY2siLCJ0b2dnbGVQbGF5IiwidG9nZ2xlUGxheVNlY29uZCIsInRvZ2dsZVBsYXlUaGlyZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3NzIiwiQm9zcyIsInBsYXllciIsIlBsYXllciIsImRlYWRGcm9nIiwieCIsInkiLCJkZWFkVGVycmEiLCJiYXR0bGVUaGVtZSIsInZvbHVtZSIsImZpZ2h0T24iLCJqZW5vdmFBYnNvbHV0ZSIsInBhdXNlZCIsInBsYXkiLCJjdXJyZW50VGltZSIsInBhdXNlIiwiYm9zc1Nwcml0ZSIsIkltYWdlIiwic3JjIiwiYmFja2dyb3VuZCIsInBsYXllclNwcml0ZSIsImRlYWRTcHJpdGUxIiwiZGVhZFNwcml0ZTIiLCJhdHRhY2tBdWRpbyIsIkF1ZGlvIiwiYm9zc0F0dEF1ZGlvIiwibG9zc0F1ZGlvIiwidmljdG9yeUF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc2V0UGxheWVyIiwiaGl0Q2hhbmNlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZG1nIiwiaHAiLCJ0ZXh0IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwic2V0VGltZW91dCIsInJlbW92ZSIsImJ1dHRvbiIsImRpc2FibGVkIiwid2luR2FtZU92ZXIiLCJsb3NlR2FtZU92ZXIiLCJwcm9wcyIsIm1wIiwicmVzZXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0FELE1BQU0sQ0FBQ0UsVUFBUCxHQUFvQkEsVUFBcEI7QUFDQUYsTUFBTSxDQUFDRyxnQkFBUCxHQUEwQkEsZ0JBQTFCO0FBQ0FILE1BQU0sQ0FBQ0ksZUFBUCxHQUF5QkEsZUFBekIsQyxDQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBSixNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmO0FBQ0FMLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixHQUFoQjtBQUVBLElBQU1DLElBQUksR0FBRyxJQUFJQyxnREFBSixFQUFiO0FBRUEsSUFBTUMsTUFBTSxHQUFHLElBQUlDLGtEQUFKLEVBQWY7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsR0FBQyxFQUFFLEdBRFk7QUFFZkMsR0FBQyxFQUFFLEdBRlk7QUFHZlIsT0FBSyxFQUFFLEVBSFE7QUFJ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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi91dGlscy9wbGF5ZXJcIjtcbmltcG9ydCBCb3NzIGZyb20gXCIuL3V0aWxzL2Jvc3NcIjtcbndpbmRvdy5hdHRhY2sgPSBhdHRhY2s7XG53aW5kb3cudG9nZ2xlUGxheSA9IHRvZ2dsZVBsYXk7XG53aW5kb3cudG9nZ2xlUGxheVNlY29uZCA9IHRvZ2dsZVBsYXlTZWNvbmQ7XG53aW5kb3cudG9nZ2xlUGxheVRoaXJkID0gdG9nZ2xlUGxheVRoaXJkO1xuXG4vLyBjb25zdCBiYXR0bGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXR0bGVNZW51XCIpXG4vLyBjb25zdCBhdHRhY2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0bkNvbnRhaW5lclwiKVxuLy8gY29uc3QgYXR0YWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5Db250YWluZXJcIilcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZFwiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG5jb25zdCBib3NzID0gbmV3IEJvc3MoKTtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuXG5jb25zdCBkZWFkRnJvZyA9IHtcbiAgeDogNzAwLFxuICB5OiAzMDAsXG4gIHdpZHRoOiA1MCxcbiAgaGVpZ2h0OiAyOCxcbn07XG5cbmNvbnN0IGRlYWRUZXJyYSA9IHtcbiAgeDogNzAwLFxuICB5OiAzODAsXG4gIHdpZHRoOiA0OCxcbiAgaGVpZ2h0OiAzMixcbn07XG5cbmxldCBiYXR0bGVUaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtMVwiKTtcbmJhdHRsZVRoZW1lLnZvbHVtZSA9IDAuMztcbmxldCBmaWdodE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0yXCIpO1xuZmlnaHRPbi52b2x1bWUgPSAwLjM7XG5sZXQgamVub3ZhQWJzb2x1dGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTNcIik7XG5qZW5vdmFBYnNvbHV0ZS52b2x1bWUgPSAwLjM7XG5cbmZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gIGlmIChiYXR0bGVUaGVtZS5wYXVzZWQpIHtcbiAgICBiYXR0bGVUaGVtZS5wbGF5KCk7XG4gICAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gICAgZmlnaHRPbi5wYXVzZSgpO1xuICAgIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICB9XG59XG5mdW5jdGlvbiB0b2dnbGVQbGF5U2Vjb25kKCkge1xuICBpZiAoZmlnaHRPbi5wYXVzZWQpIHtcbiAgICBmaWdodE9uLnBsYXkoKTtcbiAgICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gICAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRvZ2dsZVBsYXlUaGlyZCgpIHtcbiAgaWYgKGplbm92YUFic29sdXRlLnBhdXNlZCkge1xuICAgIGplbm92YUFic29sdXRlLnBsYXkoKTtcbiAgICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gICAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICAgIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIH1cbn1cblxuY29uc3QgYm9zc1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xuYm9zc1Nwcml0ZS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLmdpZlwiO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2JhY2tncm91bmQuZ2lmXCI7XG5cbmNvbnN0IHBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL0Nyb25vLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMSA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTEuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvRnJvZy5naWZcIjtcblxuY29uc3QgZGVhZFNwcml0ZTIgPSBuZXcgSW1hZ2UoKTtcbmRlYWRTcHJpdGUyLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL1RlcnJhLmdpZlwiO1xuXG5jb25zdCBhdHRhY2tBdWRpbyA9IG5ldyBBdWRpbygpO1xuYXR0YWNrQXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYXR0YWNrLm1wM1wiO1xuXG5jb25zdCBib3NzQXR0QXVkaW8gPSBuZXcgQXVkaW8oKTtcbmJvc3NBdHRBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLm1wM1wiO1xuXG5jb25zdCBsb3NzQXVkaW8gPSBuZXcgQXVkaW8oKTtcbmxvc3NBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9sb3NzLm1wM1wiO1xuXG5jb25zdCB2aWN0b3J5QXVkaW8gPSBuZXcgQXVkaW8oKTtcbnZpY3RvcnlBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy92aWN0b3J5Lm1wM1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZXZlbnQpID0+IHtcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYm9zc1Nwcml0ZSwgYm9zcy54LCBib3NzLnksIGJvc3Mud2lkdGgsIGJvc3MuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgcGxheWVyU3ByaXRlLFxuICAgICAgcGxheWVyLngsXG4gICAgICBwbGF5ZXIueSxcbiAgICAgIHBsYXllci53aWR0aCxcbiAgICAgIHBsYXllci5oZWlnaHRcbiAgICApO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBkZWFkU3ByaXRlMSxcbiAgICAgIGRlYWRGcm9nLngsXG4gICAgICBkZWFkRnJvZy55LFxuICAgICAgZGVhZEZyb2cud2lkdGgsXG4gICAgICBkZWFkRnJvZy5oZWlnaHRcbiAgICApO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBkZWFkU3ByaXRlMixcbiAgICAgIGRlYWRUZXJyYS54LFxuICAgICAgZGVhZFRlcnJhLnksXG4gICAgICBkZWFkVGVycmEud2lkdGgsXG4gICAgICBkZWFkVGVycmEuaGVpZ2h0XG4gICAgKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cblxuICBhbmltYXRlKCk7XG59KTtcblxuZnVuY3Rpb24gcmVzZXRQbGF5ZXIoKSB7XG4gIHBsYXllci54ID0gNzAwO1xufVxuLy9hdHRhY2tcbmZ1bmN0aW9uIGF0dGFjaygpIHtcbiAgcGxheWVyLnggPSA2MDA7XG4gIGF0dGFja0F1ZGlvLnBsYXkoKTtcbiAgbGV0IGhpdENoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgaWYgKGhpdENoYW5jZSA+PSA0KSB7XG4gICAgbGV0IGRtZyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSArIHBsYXllci5kbWc7XG4gICAgLy9hcHBlbmQgZGl2P1xuICAgIGJvc3MuaHAgLT0gZG1nO1xuICAgIGlmIChib3NzLmhwIDwgMCkge1xuICAgICAgYm9zcy5ocCA9IDA7XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImRtZy10ZXh0XCIpO1xuICAgIHRleHQuYXBwZW5kKFxuICAgICAgYFlvdSBkZWFsdCAke2RtZ30gZG1nIHRvIFJlY3Vyc2lvbiwgUmVjdXJzaW9uIG5vdyBoYXMgJHtib3NzLmhwfSBocCEgYFxuICAgICk7XG4gICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9IGVsc2Uge1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcIm1pc3MtdGV4dFwiKTtcbiAgICB0ZXh0LmFwcGVuZChcbiAgICAgIGBZb3UgbWlzc2VkISBZb3UgZGVhbHQgMCBkbWcgdG8gdGhlIGJvc3MsIHRoZSBib3NzIG5vdyBoYXMgJHtib3NzLmhwfSBocCEgYFxuICAgICk7XG4gICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIHNldFRpbWVvdXQocmVzZXRQbGF5ZXIsIDcwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuXCIpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgYm9zcy5hdHRhY2socGxheWVyKTtcbiAgICBib3NzQXR0QXVkaW8ucGxheSgpO1xuICB9LCAyMDAwKTtcbiAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGlmIChib3NzLmhwIDw9IDApIHtcbiAgICB3aW5HYW1lT3ZlcigpO1xuICB9IGVsc2UgaWYgKHBsYXllci5ocCA8PSAwKSB7XG4gICAgbG9zZUdhbWVPdmVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9zZUdhbWVPdmVyKCkge1xuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcImdhbWUtb3ZlclwiKTtcbiAgdGV4dC5hcHBlbmQoYEdhbWUgT3ZlciEgWW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIGxlZnQhIGApO1xuICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgZmlnaHRPbi5wYXVzZSgpO1xuICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIGxvc3NBdWRpby5wbGF5KCk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuXCIpO1xuICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gd2luR2FtZU92ZXIoKSB7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyXCIpO1xuICB0ZXh0LmFwcGVuZChgWW91IGhhdmUgZGVmZWF0ZWQgUmVjdXJzaW9uIWApO1xuICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgZmlnaHRPbi5wYXVzZSgpO1xuICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIHZpY3RvcnlBdWRpby5wbGF5KCk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuXCIpO1xuICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBsb3NlR2FtZU92ZXIgZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgd2luR2FtZU92ZXIgZnJvbSBcIi4uL2luZGV4XCI7XG5cbmNsYXNzIEJvc3Mge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICh0aGlzLnggPSAxMDApLFxuICAgICAgKHRoaXMueSA9IDE1MCksXG4gICAgICAodGhpcy53aWR0aCA9IDI0MCksXG4gICAgICAodGhpcy5oZWlnaHQgPSAyNTYpLFxuICAgICAgKHRoaXMuaHAgPSAxMDApLFxuICAgICAgKHRoaXMubXAgPSA5OTk5KSxcbiAgICAgICh0aGlzLmRtZyA9IDExKTtcbiAgICB0aGlzLnJlc2V0ID0gdGhpcy5yZXNldC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy54ID0gMTAwO1xuICB9XG5cbiAgYXR0YWNrKHBsYXllcikge1xuICAgIHRoaXMueCA9IDIwMDtcbiAgICBsZXQgaGl0Q2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlmIChoaXRDaGFuY2UgPj0gMykge1xuICAgICAgbGV0IGRtZyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSArIHRoaXMuZG1nO1xuICAgICAgcGxheWVyLmhwIC09IGRtZztcbiAgICAgIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgICAgICBwbGF5ZXIuaHAgPSAwO1xuICAgICAgfVxuICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImJvc3MtZG1nLXRleHRcIik7XG4gICAgICB0ZXh0LmFwcGVuZChcbiAgICAgICAgYFJlY3Vyc2lvbiBkZWFsdCAke2RtZ30gdG8geW91LCB5b3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWBcbiAgICAgICk7XG4gICAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLW1pc3MtdGV4dFwiKTtcbiAgICAgIHRleHQuYXBwZW5kKGBSZWN1cnNpb24gbWlzc2VkISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVzZXQsIDcwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9zcztcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy54ID0gNzAwLFxuICAgIHRoaXMueSA9IDIwMCxcbiAgICB0aGlzLndpZHRoID0gNjIsXG4gICAgdGhpcy5oZWlnaHQgPSA2MixcbiAgICB0aGlzLmhwID0gMTAwLFxuICAgIHRoaXMubXAgPSA5OTksXG4gICAgdGhpcy5kbWcgPSAxMFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=