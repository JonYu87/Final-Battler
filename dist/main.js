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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvLi9zcmMvdXRpbHMvYm9zcy5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzExZDkiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIndpbmRvdyIsImF0dGFjayIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVQbGF5U2Vjb25kIiwidG9nZ2xlUGxheVRoaXJkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImJvc3MiLCJCb3NzIiwicGxheWVyIiwiUGxheWVyIiwiZGVhZEZyb2ciLCJ4IiwieSIsImRlYWRUZXJyYSIsImJhdHRsZVRoZW1lIiwidm9sdW1lIiwiZmlnaHRPbiIsImplbm92YUFic29sdXRlIiwicGF1c2VkIiwicGxheSIsImN1cnJlbnRUaW1lIiwicGF1c2UiLCJib3NzU3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwicGxheWVyU3ByaXRlIiwiZGVhZFNwcml0ZTEiLCJkZWFkU3ByaXRlMiIsImF0dGFja0F1ZGlvIiwiQXVkaW8iLCJib3NzQXR0QXVkaW8iLCJsb3NzQXVkaW8iLCJ2aWN0b3J5QXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzZXRQbGF5ZXIiLCJidXR0b24iLCJkaXNhYmxlZCIsImhpdENoYW5jZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImRtZyIsImhwIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ3aW5HYW1lT3ZlciIsImxvc2VHYW1lT3ZlciIsInByb3BzIiwibXAiLCJyZXNldCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQUQsTUFBTSxDQUFDRSxVQUFQLEdBQW9CQSxVQUFwQjtBQUNBRixNQUFNLENBQUNHLGdCQUFQLEdBQTBCQSxnQkFBMUI7QUFDQUgsTUFBTSxDQUFDSSxlQUFQLEdBQXlCQSxlQUF6QixDLENBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FKLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLEdBQWY7QUFDQUwsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLEdBQWhCO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlDLGdEQUFKLEVBQWI7QUFFQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsa0RBQUosRUFBZjtBQUVBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxHQUFDLEVBQUUsR0FEWTtBQUVmQyxHQUFDLEVBQUUsR0FGWTtBQUdmUixPQUFLLEVBQUUsRUFI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QUFaLEVBQW1CO0FBQUE7O0FBQ2pCLE9BQUtqRCxDQUFMLEdBQVMsR0FBVCxFQUNBLEtBQUtDLENBQUwsR0FBUyxHQURULEVBRUEsS0FBS1IsS0FBTCxHQUFhLEVBRmIsRUFHQSxLQUFLQyxNQUFMLEdBQWMsRUFIZCxFQUlBLEtBQUsyQyxFQUFMLEdBQVUsR0FKVixFQUtBLEtBQUthLEVBQUwsR0FBVSxHQUxWLEVBTUEsS0FBS2QsR0FBTCxHQUFXLEVBTlg7QUFPRCxDOztBQUNGO0FBRUQsaUVBQWV0QyxNQUFmLEU7Ozs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vdXRpbHMvcGxheWVyXCI7XG5pbXBvcnQgQm9zcyBmcm9tIFwiLi91dGlscy9ib3NzXCI7XG53aW5kb3cuYXR0YWNrID0gYXR0YWNrO1xud2luZG93LnRvZ2dsZVBsYXkgPSB0b2dnbGVQbGF5O1xud2luZG93LnRvZ2dsZVBsYXlTZWNvbmQgPSB0b2dnbGVQbGF5U2Vjb25kO1xud2luZG93LnRvZ2dsZVBsYXlUaGlyZCA9IHRvZ2dsZVBsYXlUaGlyZDtcblxuLy8gY29uc3QgYmF0dGxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmF0dGxlTWVudVwiKVxuLy8gY29uc3QgYXR0YWNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5Db250YWluZXJcIilcbi8vIGNvbnN0IGF0dGFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuQ29udGFpbmVyXCIpXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGRcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDYwMDtcblxuY29uc3QgYm9zcyA9IG5ldyBCb3NzKCk7XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcblxuY29uc3QgZGVhZEZyb2cgPSB7XG4gIHg6IDcwMCxcbiAgeTogMzAwLFxuICB3aWR0aDogNTAsXG4gIGhlaWdodDogMjgsXG59O1xuXG5jb25zdCBkZWFkVGVycmEgPSB7XG4gIHg6IDcwMCxcbiAgeTogMzgwLFxuICB3aWR0aDogNDgsXG4gIGhlaWdodDogMzIsXG59O1xuXG5sZXQgYmF0dGxlVGhlbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTFcIik7XG5iYXR0bGVUaGVtZS52b2x1bWUgPSAwLjM7XG5sZXQgZmlnaHRPbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtMlwiKTtcbmZpZ2h0T24udm9sdW1lID0gMC4zO1xubGV0IGplbm92YUFic29sdXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0zXCIpO1xuamVub3ZhQWJzb2x1dGUudm9sdW1lID0gMC4zO1xuXG5mdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICBpZiAoYmF0dGxlVGhlbWUucGF1c2VkKSB7XG4gICAgYmF0dGxlVGhlbWUucGxheSgpO1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gICAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gdG9nZ2xlUGxheVNlY29uZCgpIHtcbiAgaWYgKGZpZ2h0T24ucGF1c2VkKSB7XG4gICAgZmlnaHRPbi5wbGF5KCk7XG4gICAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICAgIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gICAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICAgIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gICAgZmlnaHRPbi5wYXVzZSgpO1xuICB9XG59XG5mdW5jdGlvbiB0b2dnbGVQbGF5VGhpcmQoKSB7XG4gIGlmIChqZW5vdmFBYnNvbHV0ZS5wYXVzZWQpIHtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wbGF5KCk7XG4gICAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICAgIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gICAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gICAgZmlnaHRPbi5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB9XG59XG5cbmNvbnN0IGJvc3NTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbmJvc3NTcHJpdGUuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYm9zcy5naWZcIjtcblxuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9iYWNrZ3JvdW5kLmdpZlwiO1xuXG5jb25zdCBwbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbnBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9Dcm9uby5naWZcIjtcblxuY29uc3QgZGVhZFNwcml0ZTEgPSBuZXcgSW1hZ2UoKTtcbmRlYWRTcHJpdGUxLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL0Zyb2cuZ2lmXCI7XG5cbmNvbnN0IGRlYWRTcHJpdGUyID0gbmV3IEltYWdlKCk7XG5kZWFkU3ByaXRlMi5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9UZXJyYS5naWZcIjtcblxuY29uc3QgYXR0YWNrQXVkaW8gPSBuZXcgQXVkaW8oKTtcbmF0dGFja0F1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2F0dGFjay5tcDNcIjtcblxuY29uc3QgYm9zc0F0dEF1ZGlvID0gbmV3IEF1ZGlvKCk7XG5ib3NzQXR0QXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYm9zcy5tcDNcIjtcblxuY29uc3QgbG9zc0F1ZGlvID0gbmV3IEF1ZGlvKCk7XG5sb3NzQXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvbG9zcy5tcDNcIjtcblxuY29uc3QgdmljdG9yeUF1ZGlvID0gbmV3IEF1ZGlvKCk7XG52aWN0b3J5QXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvdmljdG9yeS5tcDNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2ZW50KSA9PiB7XG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKGJvc3NTcHJpdGUsIGJvc3MueCwgYm9zcy55LCBib3NzLndpZHRoLCBib3NzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHBsYXllclNwcml0ZSxcbiAgICAgIHBsYXllci54LFxuICAgICAgcGxheWVyLnksXG4gICAgICBwbGF5ZXIud2lkdGgsXG4gICAgICBwbGF5ZXIuaGVpZ2h0XG4gICAgKTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZGVhZFNwcml0ZTEsXG4gICAgICBkZWFkRnJvZy54LFxuICAgICAgZGVhZEZyb2cueSxcbiAgICAgIGRlYWRGcm9nLndpZHRoLFxuICAgICAgZGVhZEZyb2cuaGVpZ2h0XG4gICAgKTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZGVhZFNwcml0ZTIsXG4gICAgICBkZWFkVGVycmEueCxcbiAgICAgIGRlYWRUZXJyYS55LFxuICAgICAgZGVhZFRlcnJhLndpZHRoLFxuICAgICAgZGVhZFRlcnJhLmhlaWdodFxuICAgICk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG5cbiAgYW5pbWF0ZSgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlc2V0UGxheWVyKCkge1xuICBwbGF5ZXIueCA9IDcwMDtcbn1cbi8vYXR0YWNrXG5mdW5jdGlvbiBhdHRhY2soKSB7XG4gIHBsYXllci54ID0gNjAwO1xuICBhdHRhY2tBdWRpby5wbGF5KCk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuXCIpO1xuICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBsZXQgaGl0Q2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICBpZiAoaGl0Q2hhbmNlID49IDQpIHtcbiAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgcGxheWVyLmRtZztcbiAgICAvL2FwcGVuZCBkaXY/XG4gICAgYm9zcy5ocCAtPSBkbWc7XG4gICAgaWYgKGJvc3MuaHAgPCAwKSB7XG4gICAgICBib3NzLmhwID0gMDtcbiAgICB9XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJkbWctdGV4dFwiKTtcbiAgICB0ZXh0LmFwcGVuZChcbiAgICAgIGBZb3UgZGVhbHQgJHtkbWd9IGRtZyB0byBSZWN1cnNpb24sIFJlY3Vyc2lvbiBub3cgaGFzICR7Ym9zcy5ocH0gaHAhIGBcbiAgICApO1xuICAgIGJvZHkuYXBwZW5kKHRleHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICB9LCAyMDAwKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcIm1pc3MtdGV4dFwiKTtcbiAgICB0ZXh0LmFwcGVuZChcbiAgICAgIGBZb3UgbWlzc2VkISBZb3UgZGVhbHQgMCBkbWcgdG8gdGhlIGJvc3MsIHRoZSBib3NzIG5vdyBoYXMgJHtib3NzLmhwfSBocCEgYFxuICAgICk7XG4gICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIHNldFRpbWVvdXQocmVzZXRQbGF5ZXIsIDcwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGJvc3MuYXR0YWNrKHBsYXllcik7XG4gICAgYm9zc0F0dEF1ZGlvLnBsYXkoKTtcbiAgfSwgMjAwMCk7XG4gIGlmIChib3NzLmhwIDw9IDApIHtcbiAgICB3aW5HYW1lT3ZlcigpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAocGxheWVyLmhwIDw9IDApIHtcbiAgICBsb3NlR2FtZU92ZXIoKTtcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvc2VHYW1lT3ZlcigpIHtcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcImdhbWUtb3ZlclwiKTtcbiAgdGV4dC5hcHBlbmQoYEdhbWUgT3ZlciEgWW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIGxlZnQhIGApO1xuICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgZmlnaHRPbi5wYXVzZSgpO1xuICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIGxvc3NBdWRpby5wbGF5KCk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuXCIpO1xuICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gd2luR2FtZU92ZXIoKSB7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJcIik7XG4gIHRleHQuYXBwZW5kKGBZb3UgaGF2ZSBkZWZlYXRlZCBSZWN1cnNpb24hYCk7XG4gIGJvZHkuYXBwZW5kKHRleHQpO1xuICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICBmaWdodE9uLnBhdXNlKCk7XG4gIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgdmljdG9yeUF1ZGlvLnBsYXkoKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5cIik7XG4gIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGxvc2VHYW1lT3ZlciBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB3aW5HYW1lT3ZlciBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY2xhc3MgQm9zcyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgKHRoaXMueCA9IDEwMCksXG4gICAgICAodGhpcy55ID0gMTUwKSxcbiAgICAgICh0aGlzLndpZHRoID0gMjQwKSxcbiAgICAgICh0aGlzLmhlaWdodCA9IDI1NiksXG4gICAgICAodGhpcy5ocCA9IDEwMCksXG4gICAgICAodGhpcy5tcCA9IDk5OTkpLFxuICAgICAgKHRoaXMuZG1nID0gMTEpO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnggPSAxMDA7XG4gIH1cblxuICBhdHRhY2socGxheWVyKSB7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaWYgKGhpdENoYW5jZSA+PSAzKSB7XG4gICAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgdGhpcy5kbWc7XG4gICAgICBwbGF5ZXIuaHAgLT0gZG1nO1xuICAgICAgaWYgKHBsYXllci5ocCA8PSAwKSB7XG4gICAgICAgIHBsYXllci5ocCA9IDA7XG4gICAgICB9XG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLWRtZy10ZXh0XCIpO1xuICAgICAgdGV4dC5hcHBlbmQoXG4gICAgICAgIGBSZWN1cnNpb24gZGVhbHQgJHtkbWd9IHRvIHlvdSwgeW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIHJlbWFpbmluZyFgXG4gICAgICApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLW1pc3MtdGV4dFwiKTtcbiAgICAgIHRleHQuYXBwZW5kKGBSZWN1cnNpb24gbWlzc2VkISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICB3aW5HYW1lT3ZlcigpO1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgICAgICBsb3NlR2FtZU92ZXIoKTtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCh0aGlzLnJlc2V0LCA3MDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvc3M7XG4iLCJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMueCA9IDcwMCxcbiAgICB0aGlzLnkgPSAyMDAsXG4gICAgdGhpcy53aWR0aCA9IDYyLFxuICAgIHRoaXMuaGVpZ2h0ID0gNjIsXG4gICAgdGhpcy5ocCA9IDEwMCxcbiAgICB0aGlzLm1wID0gOTk5LFxuICAgIHRoaXMuZG1nID0gMTBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9