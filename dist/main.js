/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  var button = document.getElementById("attackBtn");
  button.disabled = true;
  var hitChance = Math.round(Math.random() * 10);

  if (hitChance >= 4) {
    var dmg = Math.round(Math.random() * 10) + player.dmg; //append div?

    boss.hp -= dmg;

    if (boss.hp < 0) {
      boss.hp = 0;
    }

    var text = document.createElement("div");
    var body = document.querySelector(".game-container");
    text.classList.add("dmg-text");
    text.append("You dealt ".concat(dmg, " dmg to Recursion, Recursion now has ").concat(boss.hp, " hp! "));
    body.append(text);
    setTimeout(function () {
      text.remove();
    }, 2000);
  } else {
    var _text = document.createElement("div");

    var _body = document.querySelector(".game-container");

    _text.classList.add("miss-text");

    _text.append("You missed! You dealt 0 dmg to the boss, the boss now has ".concat(boss.hp, " hp! "));

    _body.append(_text);

    setTimeout(function () {
      _text.remove();
    }, 2000);
  }

  setTimeout(resetPlayer, 700);
  setTimeout(function () {
    button.disabled = false;
    boss.attack(player);
    bossAttAudio.play();
  }, 2000);

  if (boss.hp <= 0) {
    winGameOver();
    button.disabled = true;
  } else if (player.hp <= 0) {
    loseGameOver();
    button.disabled = true;
  }
}

function loseGameOver() {
  var text = document.createElement("div");
  var body = document.querySelector(".game-container");
  text.classList.add("game-over");
  text.append("Game Over! You have ".concat(player.hp, " hp left!"));
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
  var body = document.querySelector(".game-container");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loseGameOver: loseGameOver,
  winGameOver: winGameOver
});

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
        var body = document.querySelector(".game-container");
        text.classList.add("boss-dmg-text");
        text.append("Recursion dealt ".concat(dmg, " to you, you have ").concat(player.hp, " hp remaining!"));
        body.append(text);
        setTimeout(function () {
          text.remove();
        }, 2000);
      } else {
        var _text = document.createElement("div");

        var _body = document.querySelector(".game-container");

        _text.classList.add("boss-miss-text");

        _text.append("Recursion missed! You have ".concat(player.hp, " hp remaining!"));

        _body.append(_text);

        setTimeout(function () {
          _text.remove();
        }, 2000);

        if (this.hp <= 0) {
          (0,_index__WEBPACK_IMPORTED_MODULE_1__.default)();
          button.disabled = true;
        } else if (player.hp <= 0) {
          (0,_index__WEBPACK_IMPORTED_MODULE_1__.default)();
          button.disabled = true;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvLi9zcmMvdXRpbHMvYm9zcy5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzExZDkiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIndpbmRvdyIsImF0dGFjayIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVQbGF5U2Vjb25kIiwidG9nZ2xlUGxheVRoaXJkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImJvc3MiLCJCb3NzIiwicGxheWVyIiwiUGxheWVyIiwiZGVhZEZyb2ciLCJ4IiwieSIsImRlYWRUZXJyYSIsImJhdHRsZVRoZW1lIiwidm9sdW1lIiwiZmlnaHRPbiIsImplbm92YUFic29sdXRlIiwicGF1c2VkIiwicGxheSIsImN1cnJlbnRUaW1lIiwicGF1c2UiLCJib3NzU3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwicGxheWVyU3ByaXRlIiwiZGVhZFNwcml0ZTEiLCJkZWFkU3ByaXRlMiIsImF0dGFja0F1ZGlvIiwiQXVkaW8iLCJib3NzQXR0QXVkaW8iLCJsb3NzQXVkaW8iLCJ2aWN0b3J5QXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzZXRQbGF5ZXIiLCJidXR0b24iLCJkaXNhYmxlZCIsImhpdENoYW5jZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImRtZyIsImhwIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ3aW5HYW1lT3ZlciIsImxvc2VHYW1lT3ZlciIsInByb3BzIiwibXAiLCJyZXNldCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQUQsTUFBTSxDQUFDRSxVQUFQLEdBQW9CQSxVQUFwQjtBQUNBRixNQUFNLENBQUNHLGdCQUFQLEdBQTBCQSxnQkFBMUI7QUFDQUgsTUFBTSxDQUFDSSxlQUFQLEdBQXlCQSxlQUF6QixDLENBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FKLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLEdBQWY7QUFDQUwsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLEdBQWhCO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlDLGdEQUFKLEVBQWI7QUFFQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsa0RBQUosRUFBZjtBQUVBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxHQUFDLEVBQUUsR0FEWTtBQUVmQyxHQUFDLEVBQUUsR0FGWTtBQUdmUixPQUFLLEVBQUUs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RDs7Ozs7O0FBR0gsaUVBQWV2RCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7SUM1RE1FLE0sR0FDSixnQkFBWW1ELEtBQVosRUFBbUI7QUFBQTs7QUFDakIsT0FBS2pELENBQUwsR0FBUyxHQUFULEVBQ0EsS0FBS0MsQ0FBTCxHQUFTLEdBRFQsRUFFQSxLQUFLUixLQUFMLEdBQWEsRUFGYixFQUdBLEtBQUtDLE1BQUwsR0FBYyxFQUhkLEVBSUEsS0FBSzJDLEVBQUwsR0FBVSxHQUpWLEVBS0EsS0FBS2EsRUFBTCxHQUFVLEdBTFYsRUFNQSxLQUFLZCxHQUFMLEdBQVcsRUFOWDtBQU9ELEM7O0FBQ0Y7QUFFRCxpRUFBZXRDLE1BQWYsRTs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi91dGlscy9wbGF5ZXJcIjtcbmltcG9ydCBCb3NzIGZyb20gXCIuL3V0aWxzL2Jvc3NcIjtcbndpbmRvdy5hdHRhY2sgPSBhdHRhY2s7XG53aW5kb3cudG9nZ2xlUGxheSA9IHRvZ2dsZVBsYXk7XG53aW5kb3cudG9nZ2xlUGxheVNlY29uZCA9IHRvZ2dsZVBsYXlTZWNvbmQ7XG53aW5kb3cudG9nZ2xlUGxheVRoaXJkID0gdG9nZ2xlUGxheVRoaXJkO1xuXG4vLyBjb25zdCBiYXR0bGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXR0bGVNZW51XCIpXG4vLyBjb25zdCBhdHRhY2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0bkNvbnRhaW5lclwiKVxuLy8gY29uc3QgYXR0YWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5Db250YWluZXJcIilcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZFwiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG5jb25zdCBib3NzID0gbmV3IEJvc3MoKTtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuXG5jb25zdCBkZWFkRnJvZyA9IHtcbiAgeDogNzAwLFxuICB5OiAzMDAsXG4gIHdpZHRoOiA1MCxcbiAgaGVpZ2h0OiAyOCxcbn07XG5cbmNvbnN0IGRlYWRUZXJyYSA9IHtcbiAgeDogNzAwLFxuICB5OiAzODAsXG4gIHdpZHRoOiA0OCxcbiAgaGVpZ2h0OiAzMixcbn07XG5cbmxldCBiYXR0bGVUaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtMVwiKTtcbmJhdHRsZVRoZW1lLnZvbHVtZSA9IDAuMztcbmxldCBmaWdodE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0yXCIpO1xuZmlnaHRPbi52b2x1bWUgPSAwLjM7XG5sZXQgamVub3ZhQWJzb2x1dGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTNcIik7XG5qZW5vdmFBYnNvbHV0ZS52b2x1bWUgPSAwLjM7XG5cbmZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gIGlmIChiYXR0bGVUaGVtZS5wYXVzZWQpIHtcbiAgICBiYXR0bGVUaGVtZS5wbGF5KCk7XG4gICAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gICAgZmlnaHRPbi5wYXVzZSgpO1xuICAgIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICB9XG59XG5mdW5jdGlvbiB0b2dnbGVQbGF5U2Vjb25kKCkge1xuICBpZiAoZmlnaHRPbi5wYXVzZWQpIHtcbiAgICBmaWdodE9uLnBsYXkoKTtcbiAgICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gICAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRvZ2dsZVBsYXlUaGlyZCgpIHtcbiAgaWYgKGplbm92YUFic29sdXRlLnBhdXNlZCkge1xuICAgIGplbm92YUFic29sdXRlLnBsYXkoKTtcbiAgICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gICAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICAgIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIH1cbn1cblxuY29uc3QgYm9zc1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xuYm9zc1Nwcml0ZS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLmdpZlwiO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2JhY2tncm91bmQuZ2lmXCI7XG5cbmNvbnN0IHBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL0Nyb25vLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMSA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTEuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvRnJvZy5naWZcIjtcblxuY29uc3QgZGVhZFNwcml0ZTIgPSBuZXcgSW1hZ2UoKTtcbmRlYWRTcHJpdGUyLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL1RlcnJhLmdpZlwiO1xuXG5jb25zdCBhdHRhY2tBdWRpbyA9IG5ldyBBdWRpbygpO1xuYXR0YWNrQXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYXR0YWNrLm1wM1wiO1xuXG5jb25zdCBib3NzQXR0QXVkaW8gPSBuZXcgQXVkaW8oKTtcbmJvc3NBdHRBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLm1wM1wiO1xuXG5jb25zdCBsb3NzQXVkaW8gPSBuZXcgQXVkaW8oKTtcbmxvc3NBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9sb3NzLm1wM1wiO1xuXG5jb25zdCB2aWN0b3J5QXVkaW8gPSBuZXcgQXVkaW8oKTtcbnZpY3RvcnlBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy92aWN0b3J5Lm1wM1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZXZlbnQpID0+IHtcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYm9zc1Nwcml0ZSwgYm9zcy54LCBib3NzLnksIGJvc3Mud2lkdGgsIGJvc3MuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgcGxheWVyU3ByaXRlLFxuICAgICAgcGxheWVyLngsXG4gICAgICBwbGF5ZXIueSxcbiAgICAgIHBsYXllci53aWR0aCxcbiAgICAgIHBsYXllci5oZWlnaHRcbiAgICApO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBkZWFkU3ByaXRlMSxcbiAgICAgIGRlYWRGcm9nLngsXG4gICAgICBkZWFkRnJvZy55LFxuICAgICAgZGVhZEZyb2cud2lkdGgsXG4gICAgICBkZWFkRnJvZy5oZWlnaHRcbiAgICApO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBkZWFkU3ByaXRlMixcbiAgICAgIGRlYWRUZXJyYS54LFxuICAgICAgZGVhZFRlcnJhLnksXG4gICAgICBkZWFkVGVycmEud2lkdGgsXG4gICAgICBkZWFkVGVycmEuaGVpZ2h0XG4gICAgKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cblxuICBhbmltYXRlKCk7XG59KTtcblxuZnVuY3Rpb24gcmVzZXRQbGF5ZXIoKSB7XG4gIHBsYXllci54ID0gNzAwO1xufVxuLy9hdHRhY2tcbmZ1bmN0aW9uIGF0dGFjaygpIHtcbiAgcGxheWVyLnggPSA2MDA7XG4gIGF0dGFja0F1ZGlvLnBsYXkoKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5cIik7XG4gIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGlmIChoaXRDaGFuY2UgPj0gNCkge1xuICAgIGxldCBkbWcgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgKyBwbGF5ZXIuZG1nO1xuICAgIC8vYXBwZW5kIGRpdj9cbiAgICBib3NzLmhwIC09IGRtZztcbiAgICBpZiAoYm9zcy5ocCA8IDApIHtcbiAgICAgIGJvc3MuaHAgPSAwO1xuICAgIH1cbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImRtZy10ZXh0XCIpO1xuICAgIHRleHQuYXBwZW5kKFxuICAgICAgYFlvdSBkZWFsdCAke2RtZ30gZG1nIHRvIFJlY3Vyc2lvbiwgUmVjdXJzaW9uIG5vdyBoYXMgJHtib3NzLmhwfSBocCEgYFxuICAgICk7XG4gICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9IGVsc2Uge1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwibWlzcy10ZXh0XCIpO1xuICAgIHRleHQuYXBwZW5kKFxuICAgICAgYFlvdSBtaXNzZWQhIFlvdSBkZWFsdCAwIGRtZyB0byB0aGUgYm9zcywgdGhlIGJvc3Mgbm93IGhhcyAke2Jvc3MuaHB9IGhwISBgXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgc2V0VGltZW91dChyZXNldFBsYXllciwgNzAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgYm9zcy5hdHRhY2socGxheWVyKTtcbiAgICBib3NzQXR0QXVkaW8ucGxheSgpO1xuICB9LCAyMDAwKTtcbiAgaWYgKGJvc3MuaHAgPD0gMCkge1xuICAgIHdpbkdhbWVPdmVyKCk7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgIGxvc2VHYW1lT3ZlcigpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9zZUdhbWVPdmVyKCkge1xuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyXCIpO1xuICB0ZXh0LmFwcGVuZChgR2FtZSBPdmVyISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgbGVmdCFgKTtcbiAgYm9keS5hcHBlbmQodGV4dCk7XG4gIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gIGZpZ2h0T24ucGF1c2UoKTtcbiAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICBsb3NzQXVkaW8ucGxheSgpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0blwiKTtcbiAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHdpbkdhbWVPdmVyKCkge1xuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyXCIpO1xuICB0ZXh0LmFwcGVuZChgWW91IGhhdmUgZGVmZWF0ZWQgUmVjdXJzaW9uIWApO1xuICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgZmlnaHRPbi5wYXVzZSgpO1xuICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIHZpY3RvcnlBdWRpby5wbGF5KCk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuXCIpO1xuICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7bG9zZUdhbWVPdmVyLCB3aW5HYW1lT3Zlcn07XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGxvc2VHYW1lT3ZlciBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB3aW5HYW1lT3ZlciBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY2xhc3MgQm9zcyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgKHRoaXMueCA9IDEwMCksXG4gICAgICAodGhpcy55ID0gMTUwKSxcbiAgICAgICh0aGlzLndpZHRoID0gMjQwKSxcbiAgICAgICh0aGlzLmhlaWdodCA9IDI1NiksXG4gICAgICAodGhpcy5ocCA9IDEwMCksXG4gICAgICAodGhpcy5tcCA9IDk5OTkpLFxuICAgICAgKHRoaXMuZG1nID0gMTEpO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnggPSAxMDA7XG4gIH1cblxuICBhdHRhY2socGxheWVyKSB7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaWYgKGhpdENoYW5jZSA+PSAzKSB7XG4gICAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgdGhpcy5kbWc7XG4gICAgICBwbGF5ZXIuaHAgLT0gZG1nO1xuICAgICAgaWYgKHBsYXllci5ocCA8PSAwKSB7XG4gICAgICAgIHBsYXllci5ocCA9IDA7XG4gICAgICB9XG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLWRtZy10ZXh0XCIpO1xuICAgICAgdGV4dC5hcHBlbmQoXG4gICAgICAgIGBSZWN1cnNpb24gZGVhbHQgJHtkbWd9IHRvIHlvdSwgeW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIHJlbWFpbmluZyFgXG4gICAgICApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLW1pc3MtdGV4dFwiKTtcbiAgICAgIHRleHQuYXBwZW5kKGBSZWN1cnNpb24gbWlzc2VkISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICB3aW5HYW1lT3ZlcigpO1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgICAgICBsb3NlR2FtZU92ZXIoKTtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCh0aGlzLnJlc2V0LCA3MDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvc3M7XG4iLCJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMueCA9IDcwMCxcbiAgICB0aGlzLnkgPSAyMDAsXG4gICAgdGhpcy53aWR0aCA9IDYyLFxuICAgIHRoaXMuaGVpZ2h0ID0gNjIsXG4gICAgdGhpcy5ocCA9IDEwMCxcbiAgICB0aGlzLm1wID0gOTk5LFxuICAgIHRoaXMuZG1nID0gMTBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9