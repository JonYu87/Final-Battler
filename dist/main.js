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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvLi9zcmMvdXRpbHMvYm9zcy5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzExZDkiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIndpbmRvdyIsImF0dGFjayIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVQbGF5U2Vjb25kIiwidG9nZ2xlUGxheVRoaXJkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImJvc3MiLCJCb3NzIiwicGxheWVyIiwiUGxheWVyIiwiZGVhZEZyb2ciLCJ4IiwieSIsImRlYWRUZXJyYSIsImJhdHRsZVRoZW1lIiwidm9sdW1lIiwiZmlnaHRPbiIsImplbm92YUFic29sdXRlIiwicGF1c2VkIiwicGxheSIsImN1cnJlbnRUaW1lIiwicGF1c2UiLCJib3NzU3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwicGxheWVyU3ByaXRlIiwiZGVhZFNwcml0ZTEiLCJkZWFkU3ByaXRlMiIsImF0dGFja0F1ZGlvIiwiQXVkaW8iLCJib3NzQXR0QXVkaW8iLCJsb3NzQXVkaW8iLCJ2aWN0b3J5QXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzZXRQbGF5ZXIiLCJidXR0b24iLCJkaXNhYmxlZCIsImhpdENoYW5jZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImRtZyIsImhwIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ3aW5HYW1lT3ZlciIsImxvc2VHYW1lT3ZlciIsInByb3BzIiwibXAiLCJyZXNldCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQUQsTUFBTSxDQUFDRSxVQUFQLEdBQW9CQSxVQUFwQjtBQUNBRixNQUFNLENBQUNHLGdCQUFQLEdBQTBCQSxnQkFBMUI7QUFDQUgsTUFBTSxDQUFDSSxlQUFQLEdBQXlCQSxlQUF6QixDLENBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FKLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLEdBQWY7QUFDQUwsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLEdBQWhCO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlDLGdEQUFKLEVBQWI7QUFFQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsa0RBQUosRUFBZjtBQUVBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxHQUFDLEVBQUUsR0FEWTtBQUVmQyxHQUFDLEVBQUUsR0FGWTtBQUdmUixPQUFLLEVBQUUsRUFI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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3V0aWxzL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vdXRpbHMvYm9zc1wiO1xud2luZG93LmF0dGFjayA9IGF0dGFjaztcbndpbmRvdy50b2dnbGVQbGF5ID0gdG9nZ2xlUGxheTtcbndpbmRvdy50b2dnbGVQbGF5U2Vjb25kID0gdG9nZ2xlUGxheVNlY29uZDtcbndpbmRvdy50b2dnbGVQbGF5VGhpcmQgPSB0b2dnbGVQbGF5VGhpcmQ7XG5cbi8vIGNvbnN0IGJhdHRsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhdHRsZU1lbnVcIilcbi8vIGNvbnN0IGF0dGFja0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuQ29udGFpbmVyXCIpXG4vLyBjb25zdCBhdHRhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0bkNvbnRhaW5lclwiKVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbmNvbnN0IGJvc3MgPSBuZXcgQm9zcygpO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cbmNvbnN0IGRlYWRGcm9nID0ge1xuICB4OiA3MDAsXG4gIHk6IDMwMCxcbiAgd2lkdGg6IDUwLFxuICBoZWlnaHQ6IDI4LFxufTtcblxuY29uc3QgZGVhZFRlcnJhID0ge1xuICB4OiA3MDAsXG4gIHk6IDM4MCxcbiAgd2lkdGg6IDQ4LFxuICBoZWlnaHQ6IDMyLFxufTtcblxubGV0IGJhdHRsZVRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0xXCIpO1xuYmF0dGxlVGhlbWUudm9sdW1lID0gMC4zO1xubGV0IGZpZ2h0T24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTJcIik7XG5maWdodE9uLnZvbHVtZSA9IDAuMztcbmxldCBqZW5vdmFBYnNvbHV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtM1wiKTtcbmplbm92YUFic29sdXRlLnZvbHVtZSA9IDAuMztcblxuZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgaWYgKGJhdHRsZVRoZW1lLnBhdXNlZCkge1xuICAgIGJhdHRsZVRoZW1lLnBsYXkoKTtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gICAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICAgIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICAgIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRvZ2dsZVBsYXlTZWNvbmQoKSB7XG4gIGlmIChmaWdodE9uLnBhdXNlZCkge1xuICAgIGZpZ2h0T24ucGxheSgpO1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICAgIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gdG9nZ2xlUGxheVRoaXJkKCkge1xuICBpZiAoamVub3ZhQWJzb2x1dGUucGF1c2VkKSB7XG4gICAgamVub3ZhQWJzb2x1dGUucGxheSgpO1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgfVxufVxuXG5jb25zdCBib3NzU3ByaXRlID0gbmV3IEltYWdlKCk7XG5ib3NzU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MuZ2lmXCI7XG5cbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYmFja2dyb3VuZC5naWZcIjtcblxuY29uc3QgcGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvQ3Jvbm8uZ2lmXCI7XG5cbmNvbnN0IGRlYWRTcHJpdGUxID0gbmV3IEltYWdlKCk7XG5kZWFkU3ByaXRlMS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9Gcm9nLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMiA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTIuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvVGVycmEuZ2lmXCI7XG5cbmNvbnN0IGF0dGFja0F1ZGlvID0gbmV3IEF1ZGlvKCk7XG5hdHRhY2tBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9hdHRhY2subXAzXCI7XG5cbmNvbnN0IGJvc3NBdHRBdWRpbyA9IG5ldyBBdWRpbygpO1xuYm9zc0F0dEF1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MubXAzXCI7XG5cbmNvbnN0IGxvc3NBdWRpbyA9IG5ldyBBdWRpbygpO1xubG9zc0F1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2xvc3MubXAzXCI7XG5cbmNvbnN0IHZpY3RvcnlBdWRpbyA9IG5ldyBBdWRpbygpO1xudmljdG9yeUF1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL3ZpY3RvcnkubXAzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShib3NzU3ByaXRlLCBib3NzLngsIGJvc3MueSwgYm9zcy53aWR0aCwgYm9zcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBwbGF5ZXJTcHJpdGUsXG4gICAgICBwbGF5ZXIueCxcbiAgICAgIHBsYXllci55LFxuICAgICAgcGxheWVyLndpZHRoLFxuICAgICAgcGxheWVyLmhlaWdodFxuICAgICk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGRlYWRTcHJpdGUxLFxuICAgICAgZGVhZEZyb2cueCxcbiAgICAgIGRlYWRGcm9nLnksXG4gICAgICBkZWFkRnJvZy53aWR0aCxcbiAgICAgIGRlYWRGcm9nLmhlaWdodFxuICAgICk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGRlYWRTcHJpdGUyLFxuICAgICAgZGVhZFRlcnJhLngsXG4gICAgICBkZWFkVGVycmEueSxcbiAgICAgIGRlYWRUZXJyYS53aWR0aCxcbiAgICAgIGRlYWRUZXJyYS5oZWlnaHRcbiAgICApO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuXG4gIGFuaW1hdGUoKTtcbn0pO1xuXG5mdW5jdGlvbiByZXNldFBsYXllcigpIHtcbiAgcGxheWVyLnggPSA3MDA7XG59XG4vL2F0dGFja1xuZnVuY3Rpb24gYXR0YWNrKCkge1xuICBwbGF5ZXIueCA9IDYwMDtcbiAgYXR0YWNrQXVkaW8ucGxheSgpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0blwiKTtcbiAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgbGV0IGhpdENoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgaWYgKGhpdENoYW5jZSA+PSA0KSB7XG4gICAgbGV0IGRtZyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSArIHBsYXllci5kbWc7XG4gICAgLy9hcHBlbmQgZGl2P1xuICAgIGJvc3MuaHAgLT0gZG1nO1xuICAgIGlmIChib3NzLmhwIDwgMCkge1xuICAgICAgYm9zcy5ocCA9IDA7XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImRtZy10ZXh0XCIpO1xuICAgIHRleHQuYXBwZW5kKFxuICAgICAgYFlvdSBkZWFsdCAke2RtZ30gZG1nIHRvIFJlY3Vyc2lvbiwgUmVjdXJzaW9uIG5vdyBoYXMgJHtib3NzLmhwfSBocCEgYFxuICAgICk7XG4gICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9IGVsc2Uge1xuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZChcIm1pc3MtdGV4dFwiKTtcbiAgICB0ZXh0LmFwcGVuZChcbiAgICAgIGBZb3UgbWlzc2VkISBZb3UgZGVhbHQgMCBkbWcgdG8gdGhlIGJvc3MsIHRoZSBib3NzIG5vdyBoYXMgJHtib3NzLmhwfSBocCEgYFxuICAgICk7XG4gICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIHNldFRpbWVvdXQocmVzZXRQbGF5ZXIsIDcwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvc3MuYXR0YWNrKHBsYXllcik7XG4gICAgYm9zc0F0dEF1ZGlvLnBsYXkoKTtcbiAgfSwgMjAwMCk7XG4gIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBpZiAoYm9zcy5ocCA8PSAwKSB7XG4gICAgd2luR2FtZU92ZXIoKTtcbiAgfSBlbHNlIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgIGxvc2VHYW1lT3ZlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvc2VHYW1lT3ZlcigpIHtcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJcIik7XG4gIHRleHQuYXBwZW5kKGBHYW1lIE92ZXIhIFlvdSBoYXZlICR7cGxheWVyLmhwfSBocCBsZWZ0ISBgKTtcbiAgYm9keS5hcHBlbmQodGV4dCk7XG4gIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gIGZpZ2h0T24ucGF1c2UoKTtcbiAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICBsb3NzQXVkaW8ucGxheSgpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0blwiKTtcbiAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHdpbkdhbWVPdmVyKCkge1xuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcImdhbWUtb3ZlclwiKTtcbiAgdGV4dC5hcHBlbmQoYFlvdSBoYXZlIGRlZmVhdGVkIFJlY3Vyc2lvbiFgKTtcbiAgYm9keS5hcHBlbmQodGV4dCk7XG4gIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gIGZpZ2h0T24ucGF1c2UoKTtcbiAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB2aWN0b3J5QXVkaW8ucGxheSgpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0blwiKTtcbiAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgbG9zZUdhbWVPdmVyIGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHdpbkdhbWVPdmVyIGZyb20gXCIuLi9pbmRleFwiO1xuXG5jbGFzcyBCb3NzIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAodGhpcy54ID0gMTAwKSxcbiAgICAgICh0aGlzLnkgPSAxNTApLFxuICAgICAgKHRoaXMud2lkdGggPSAyNDApLFxuICAgICAgKHRoaXMuaGVpZ2h0ID0gMjU2KSxcbiAgICAgICh0aGlzLmhwID0gMTAwKSxcbiAgICAgICh0aGlzLm1wID0gOTk5OSksXG4gICAgICAodGhpcy5kbWcgPSAxMSk7XG4gICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMueCA9IDEwMDtcbiAgfVxuXG4gIGF0dGFjayhwbGF5ZXIpIHtcbiAgICB0aGlzLnggPSAyMDA7XG4gICAgbGV0IGhpdENoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBpZiAoaGl0Q2hhbmNlID49IDMpIHtcbiAgICAgIGxldCBkbWcgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgKyB0aGlzLmRtZztcbiAgICAgIHBsYXllci5ocCAtPSBkbWc7XG4gICAgICBpZiAocGxheWVyLmhwIDw9IDApIHtcbiAgICAgICAgcGxheWVyLmhwID0gMDtcbiAgICAgIH1cbiAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLWRtZy10ZXh0XCIpO1xuICAgICAgdGV4dC5hcHBlbmQoXG4gICAgICAgIGBSZWN1cnNpb24gZGVhbHQgJHtkbWd9IHRvIHlvdSwgeW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIHJlbWFpbmluZyFgXG4gICAgICApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiYm9zcy1taXNzLXRleHRcIik7XG4gICAgICB0ZXh0LmFwcGVuZChgUmVjdXJzaW9uIG1pc3NlZCEgWW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIHJlbWFpbmluZyFgKTtcbiAgICAgIGJvZHkuYXBwZW5kKHRleHQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCh0aGlzLnJlc2V0LCA3MDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvc3M7XG4iLCJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMueCA9IDcwMCxcbiAgICB0aGlzLnkgPSAyMDAsXG4gICAgdGhpcy53aWR0aCA9IDYyLFxuICAgIHRoaXMuaGVpZ2h0ID0gNjIsXG4gICAgdGhpcy5ocCA9IDEwMCxcbiAgICB0aGlzLm1wID0gOTk5LFxuICAgIHRoaXMuZG1nID0gMTBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9