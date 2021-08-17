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
battleTheme.volume = 0.1;
var fightOn = document.getElementById("theme-music-2");
fightOn.volume = 0.1;
var jenovaAbsolute = document.getElementById("theme-music-3");
jenovaAbsolute.volume = 0.1;

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
    boss.attack(player);
    bossAttAudio.play();
  }, 2000);

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
  var button = document.querySelectorAll("button");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvLi9zcmMvdXRpbHMvYm9zcy5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhdHRhY2siLCJ0b2dnbGVQbGF5IiwidG9nZ2xlUGxheVNlY29uZCIsInRvZ2dsZVBsYXlUaGlyZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3NzIiwiQm9zcyIsInBsYXllciIsIlBsYXllciIsImRlYWRGcm9nIiwieCIsInkiLCJkZWFkVGVycmEiLCJiYXR0bGVUaGVtZSIsInZvbHVtZSIsImZpZ2h0T24iLCJqZW5vdmFBYnNvbHV0ZSIsInBhdXNlZCIsInBsYXkiLCJjdXJyZW50VGltZSIsInBhdXNlIiwiYm9zc1Nwcml0ZSIsIkltYWdlIiwic3JjIiwiYmFja2dyb3VuZCIsInBsYXllclNwcml0ZSIsImRlYWRTcHJpdGUxIiwiZGVhZFNwcml0ZTIiLCJhdHRhY2tBdWRpbyIsIkF1ZGlvIiwiYm9zc0F0dEF1ZGlvIiwibG9zc0F1ZGlvIiwidmljdG9yeUF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc2V0UGxheWVyIiwiaGl0Q2hhbmNlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZG1nIiwiaHAiLCJ0ZXh0IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwic2V0VGltZW91dCIsInJlbW92ZSIsIndpbkdhbWVPdmVyIiwibG9zZUdhbWVPdmVyIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc2FibGVkIiwicHJvcHMiLCJtcCIsInJlc2V0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCQSxNQUFoQjtBQUNBRCxNQUFNLENBQUNFLFVBQVAsR0FBb0JBLFVBQXBCO0FBQ0FGLE1BQU0sQ0FBQ0csZ0JBQVAsR0FBMEJBLGdCQUExQjtBQUNBSCxNQUFNLENBQUNJLGVBQVAsR0FBeUJBLGVBQXpCLEMsQ0FFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQUosTUFBTSxDQUFDSyxLQUFQLEdBQWUsR0FBZjtBQUNBTCxNQUFNLENBQUNNLE1BQVAsR0FBZ0IsR0FBaEI7QUFFQSxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsZ0RBQUosRUFBYjtBQUVBLElBQU1DLE1BQU0sR0FBRyxJQUFJQyxrREFBSixFQUFmO0FBRUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLEdBQUMsRUFBRSxHQURZO0FBRWZDLEdBQUMsRUFBRSxHQUZZO0FBR2ZS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O1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi91dGlscy9wbGF5ZXJcIjtcbmltcG9ydCBCb3NzIGZyb20gXCIuL3V0aWxzL2Jvc3NcIjtcbndpbmRvdy5hdHRhY2sgPSBhdHRhY2s7XG53aW5kb3cudG9nZ2xlUGxheSA9IHRvZ2dsZVBsYXk7XG53aW5kb3cudG9nZ2xlUGxheVNlY29uZCA9IHRvZ2dsZVBsYXlTZWNvbmQ7XG53aW5kb3cudG9nZ2xlUGxheVRoaXJkID0gdG9nZ2xlUGxheVRoaXJkO1xuXG4vLyBjb25zdCBiYXR0bGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXR0bGVNZW51XCIpXG4vLyBjb25zdCBhdHRhY2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0bkNvbnRhaW5lclwiKVxuLy8gY29uc3QgYXR0YWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5Db250YWluZXJcIilcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZFwiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG5jb25zdCBib3NzID0gbmV3IEJvc3MoKTtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuXG5jb25zdCBkZWFkRnJvZyA9IHtcbiAgeDogNzAwLFxuICB5OiAzMDAsXG4gIHdpZHRoOiA1MCxcbiAgaGVpZ2h0OiAyOCxcbn07XG5cbmNvbnN0IGRlYWRUZXJyYSA9IHtcbiAgeDogNzAwLFxuICB5OiAzODAsXG4gIHdpZHRoOiA0OCxcbiAgaGVpZ2h0OiAzMixcbn07XG5cbmxldCBiYXR0bGVUaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtMVwiKTtcbmJhdHRsZVRoZW1lLnZvbHVtZSA9IDAuMTtcbmxldCBmaWdodE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0yXCIpO1xuZmlnaHRPbi52b2x1bWUgPSAwLjE7XG5sZXQgamVub3ZhQWJzb2x1dGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTNcIik7XG5qZW5vdmFBYnNvbHV0ZS52b2x1bWUgPSAwLjE7XG5cbmZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gIGlmIChiYXR0bGVUaGVtZS5wYXVzZWQpIHtcbiAgICBiYXR0bGVUaGVtZS5wbGF5KCk7XG4gICAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gICAgZmlnaHRPbi5wYXVzZSgpO1xuICAgIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICB9XG59XG5mdW5jdGlvbiB0b2dnbGVQbGF5U2Vjb25kKCkge1xuICBpZiAoZmlnaHRPbi5wYXVzZWQpIHtcbiAgICBmaWdodE9uLnBsYXkoKTtcbiAgICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gICAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRvZ2dsZVBsYXlUaGlyZCgpIHtcbiAgaWYgKGplbm92YUFic29sdXRlLnBhdXNlZCkge1xuICAgIGplbm92YUFic29sdXRlLnBsYXkoKTtcbiAgICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gICAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICAgIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIH1cbn1cblxuY29uc3QgYm9zc1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xuYm9zc1Nwcml0ZS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLmdpZlwiO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2JhY2tncm91bmQuZ2lmXCI7XG5cbmNvbnN0IHBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL0Nyb25vLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMSA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTEuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvRnJvZy5naWZcIjtcblxuY29uc3QgZGVhZFNwcml0ZTIgPSBuZXcgSW1hZ2UoKTtcbmRlYWRTcHJpdGUyLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL1RlcnJhLmdpZlwiO1xuXG5jb25zdCBhdHRhY2tBdWRpbyA9IG5ldyBBdWRpbygpO1xuYXR0YWNrQXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYXR0YWNrLm1wM1wiO1xuXG5jb25zdCBib3NzQXR0QXVkaW8gPSBuZXcgQXVkaW8oKTtcbmJvc3NBdHRBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLm1wM1wiO1xuXG5jb25zdCBsb3NzQXVkaW8gPSBuZXcgQXVkaW8oKTtcbmxvc3NBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9sb3NzLm1wM1wiO1xuXG5jb25zdCB2aWN0b3J5QXVkaW8gPSBuZXcgQXVkaW8oKTtcbnZpY3RvcnlBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy92aWN0b3J5Lm1wM1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZXZlbnQpID0+IHtcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYm9zc1Nwcml0ZSwgYm9zcy54LCBib3NzLnksIGJvc3Mud2lkdGgsIGJvc3MuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgcGxheWVyU3ByaXRlLFxuICAgICAgcGxheWVyLngsXG4gICAgICBwbGF5ZXIueSxcbiAgICAgIHBsYXllci53aWR0aCxcbiAgICAgIHBsYXllci5oZWlnaHRcbiAgICApO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBkZWFkU3ByaXRlMSxcbiAgICAgIGRlYWRGcm9nLngsXG4gICAgICBkZWFkRnJvZy55LFxuICAgICAgZGVhZEZyb2cud2lkdGgsXG4gICAgICBkZWFkRnJvZy5oZWlnaHRcbiAgICApO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBkZWFkU3ByaXRlMixcbiAgICAgIGRlYWRUZXJyYS54LFxuICAgICAgZGVhZFRlcnJhLnksXG4gICAgICBkZWFkVGVycmEud2lkdGgsXG4gICAgICBkZWFkVGVycmEuaGVpZ2h0XG4gICAgKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cblxuICBhbmltYXRlKCk7XG59KTtcblxuZnVuY3Rpb24gcmVzZXRQbGF5ZXIoKSB7XG4gIHBsYXllci54ID0gNzAwO1xufVxuLy9hdHRhY2tcbmZ1bmN0aW9uIGF0dGFjaygpIHtcbiAgcGxheWVyLnggPSA2MDA7XG4gIGF0dGFja0F1ZGlvLnBsYXkoKTtcbiAgbGV0IGhpdENoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgaWYgKGhpdENoYW5jZSA+PSA0KSB7XG4gICAgbGV0IGRtZyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSArIHBsYXllci5kbWc7XG4gICAgLy9hcHBlbmQgZGl2P1xuICAgIGJvc3MuaHAgLT0gZG1nO1xuICAgIGlmIChib3NzLmhwIDwgMCkge1xuICAgICAgYm9zcy5ocCA9IDA7XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImRtZy10ZXh0XCIpO1xuICAgIHRleHQuYXBwZW5kKFxuICAgICAgYFlvdSBkZWFsdCAke2RtZ30gZG1nIHRvIFJlY3Vyc2lvbiwgUmVjdXJzaW9uIG5vdyBoYXMgJHtib3NzLmhwfSBocCEgYFxuICAgICk7XG4gICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9IGVsc2Uge1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcIm1pc3MtdGV4dFwiKTtcbiAgICB0ZXh0LmFwcGVuZChcbiAgICAgIGBZb3UgbWlzc2VkISBZb3UgZGVhbHQgMCBkbWcgdG8gdGhlIGJvc3MsIHRoZSBib3NzIG5vdyBoYXMgJHtib3NzLmhwfSBocCEgYFxuICAgICk7XG4gICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIHNldFRpbWVvdXQocmVzZXRQbGF5ZXIsIDcwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvc3MuYXR0YWNrKHBsYXllcik7XG4gICAgYm9zc0F0dEF1ZGlvLnBsYXkoKTtcbiAgfSwgMjAwMCk7XG4gIGlmIChib3NzLmhwIDw9IDApIHtcbiAgICB3aW5HYW1lT3ZlcigpO1xuICB9IGVsc2UgaWYgKHBsYXllci5ocCA8PSAwKSB7XG4gICAgbG9zZUdhbWVPdmVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9zZUdhbWVPdmVyKCkge1xuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcImdhbWUtb3ZlclwiKTtcbiAgdGV4dC5hcHBlbmQoYEdhbWUgT3ZlciEgWW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIGxlZnQhIGApO1xuICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgZmlnaHRPbi5wYXVzZSgpO1xuICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIGxvc3NBdWRpby5wbGF5KCk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG5mdW5jdGlvbiB3aW5HYW1lT3ZlcigpIHtcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJcIik7XG4gIHRleHQuYXBwZW5kKGBZb3UgaGF2ZSBkZWZlYXRlZCBSZWN1cnNpb24hYCk7XG4gIGJvZHkuYXBwZW5kKHRleHQpO1xuICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICBmaWdodE9uLnBhdXNlKCk7XG4gIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgdmljdG9yeUF1ZGlvLnBsYXkoKTtcbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgbG9zZUdhbWVPdmVyIGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHdpbkdhbWVPdmVyIGZyb20gXCIuLi9pbmRleFwiO1xuXG5jbGFzcyBCb3NzIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAodGhpcy54ID0gMTAwKSxcbiAgICAgICh0aGlzLnkgPSAxNTApLFxuICAgICAgKHRoaXMud2lkdGggPSAyNDApLFxuICAgICAgKHRoaXMuaGVpZ2h0ID0gMjU2KSxcbiAgICAgICh0aGlzLmhwID0gMTAwKSxcbiAgICAgICh0aGlzLm1wID0gOTk5OSksXG4gICAgICAodGhpcy5kbWcgPSAxMSk7XG4gICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMueCA9IDEwMDtcbiAgfVxuXG4gIGF0dGFjayhwbGF5ZXIpIHtcbiAgICB0aGlzLnggPSAyMDA7XG4gICAgbGV0IGhpdENoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBpZiAoaGl0Q2hhbmNlID49IDMpIHtcbiAgICAgIGxldCBkbWcgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgKyB0aGlzLmRtZztcbiAgICAgIHBsYXllci5ocCAtPSBkbWc7XG4gICAgICBpZiAocGxheWVyLmhwIDw9IDApIHtcbiAgICAgICAgcGxheWVyLmhwID0gMDtcbiAgICAgIH1cbiAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLWRtZy10ZXh0XCIpO1xuICAgICAgdGV4dC5hcHBlbmQoXG4gICAgICAgIGBSZWN1cnNpb24gZGVhbHQgJHtkbWd9IHRvIHlvdSwgeW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIHJlbWFpbmluZyFgXG4gICAgICApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiYm9zcy1taXNzLXRleHRcIik7XG4gICAgICB0ZXh0LmFwcGVuZChgUmVjdXJzaW9uIG1pc3NlZCEgWW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIHJlbWFpbmluZyFgKTtcbiAgICAgIGJvZHkuYXBwZW5kKHRleHQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCh0aGlzLnJlc2V0LCA3MDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvc3M7XG4iLCJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMueCA9IDcwMCxcbiAgICB0aGlzLnkgPSAyMDAsXG4gICAgdGhpcy53aWR0aCA9IDYyLFxuICAgIHRoaXMuaGVpZ2h0ID0gNjIsXG4gICAgdGhpcy5ocCA9IDEwMCxcbiAgICB0aGlzLm1wID0gOTk5LFxuICAgIHRoaXMuZG1nID0gMTBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9