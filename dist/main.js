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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvLi9zcmMvdXRpbHMvYm9zcy5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzExZDkiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIndpbmRvdyIsImF0dGFjayIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVQbGF5U2Vjb25kIiwidG9nZ2xlUGxheVRoaXJkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImJvc3MiLCJCb3NzIiwicGxheWVyIiwiUGxheWVyIiwiZGVhZEZyb2ciLCJ4IiwieSIsImRlYWRUZXJyYSIsImJhdHRsZVRoZW1lIiwidm9sdW1lIiwiZmlnaHRPbiIsImplbm92YUFic29sdXRlIiwicGF1c2VkIiwicGxheSIsImN1cnJlbnRUaW1lIiwicGF1c2UiLCJib3NzU3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwicGxheWVyU3ByaXRlIiwiZGVhZFNwcml0ZTEiLCJkZWFkU3ByaXRlMiIsImF0dGFja0F1ZGlvIiwiQXVkaW8iLCJib3NzQXR0QXVkaW8iLCJsb3NzQXVkaW8iLCJ2aWN0b3J5QXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzZXRQbGF5ZXIiLCJoaXRDaGFuY2UiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJkbWciLCJocCIsInRleHQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwid2luR2FtZU92ZXIiLCJsb3NlR2FtZU92ZXIiLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzYWJsZWQiLCJwcm9wcyIsIm1wIiwicmVzZXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0FELE1BQU0sQ0FBQ0UsVUFBUCxHQUFvQkEsVUFBcEI7QUFDQUYsTUFBTSxDQUFDRyxnQkFBUCxHQUEwQkEsZ0JBQTFCO0FBQ0FILE1BQU0sQ0FBQ0ksZUFBUCxHQUF5QkEsZUFBekIsQyxDQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBSixNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmO0FBQ0FMLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixHQUFoQjtBQUVBLElBQU1DLElBQUksR0FBRyxJQUFJQyxnREFBSixFQUFiO0FBRUEsSUFBTUMsTUFBTSxHQUFHLElBQUlDLGtEQUFKLEVBQWY7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsR0FBQyxFQUFFLEdBRFk7QUFFZkMsR0FBQyxFQUFFLEdBRlk7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V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3V0aWxzL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vdXRpbHMvYm9zc1wiO1xud2luZG93LmF0dGFjayA9IGF0dGFjaztcbndpbmRvdy50b2dnbGVQbGF5ID0gdG9nZ2xlUGxheTtcbndpbmRvdy50b2dnbGVQbGF5U2Vjb25kID0gdG9nZ2xlUGxheVNlY29uZDtcbndpbmRvdy50b2dnbGVQbGF5VGhpcmQgPSB0b2dnbGVQbGF5VGhpcmQ7XG5cbi8vIGNvbnN0IGJhdHRsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhdHRsZU1lbnVcIilcbi8vIGNvbnN0IGF0dGFja0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuQ29udGFpbmVyXCIpXG4vLyBjb25zdCBhdHRhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0bkNvbnRhaW5lclwiKVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbmNvbnN0IGJvc3MgPSBuZXcgQm9zcygpO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cbmNvbnN0IGRlYWRGcm9nID0ge1xuICB4OiA3MDAsXG4gIHk6IDMwMCxcbiAgd2lkdGg6IDUwLFxuICBoZWlnaHQ6IDI4LFxufTtcblxuY29uc3QgZGVhZFRlcnJhID0ge1xuICB4OiA3MDAsXG4gIHk6IDM4MCxcbiAgd2lkdGg6IDQ4LFxuICBoZWlnaHQ6IDMyLFxufTtcblxubGV0IGJhdHRsZVRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0xXCIpO1xuYmF0dGxlVGhlbWUudm9sdW1lID0gMC4xO1xubGV0IGZpZ2h0T24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTJcIik7XG5maWdodE9uLnZvbHVtZSA9IDAuMTtcbmxldCBqZW5vdmFBYnNvbHV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtM1wiKTtcbmplbm92YUFic29sdXRlLnZvbHVtZSA9IDAuMTtcblxuZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgaWYgKGJhdHRsZVRoZW1lLnBhdXNlZCkge1xuICAgIGJhdHRsZVRoZW1lLnBsYXkoKTtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gICAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICAgIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICAgIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRvZ2dsZVBsYXlTZWNvbmQoKSB7XG4gIGlmIChmaWdodE9uLnBhdXNlZCkge1xuICAgIGZpZ2h0T24ucGxheSgpO1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICAgIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gdG9nZ2xlUGxheVRoaXJkKCkge1xuICBpZiAoamVub3ZhQWJzb2x1dGUucGF1c2VkKSB7XG4gICAgamVub3ZhQWJzb2x1dGUucGxheSgpO1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgfVxufVxuXG5jb25zdCBib3NzU3ByaXRlID0gbmV3IEltYWdlKCk7XG5ib3NzU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MuZ2lmXCI7XG5cbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYmFja2dyb3VuZC5naWZcIjtcblxuY29uc3QgcGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvQ3Jvbm8uZ2lmXCI7XG5cbmNvbnN0IGRlYWRTcHJpdGUxID0gbmV3IEltYWdlKCk7XG5kZWFkU3ByaXRlMS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9Gcm9nLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMiA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTIuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvVGVycmEuZ2lmXCI7XG5cbmNvbnN0IGF0dGFja0F1ZGlvID0gbmV3IEF1ZGlvKCk7XG5hdHRhY2tBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9hdHRhY2subXAzXCI7XG5cbmNvbnN0IGJvc3NBdHRBdWRpbyA9IG5ldyBBdWRpbygpO1xuYm9zc0F0dEF1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MubXAzXCI7XG5cbmNvbnN0IGxvc3NBdWRpbyA9IG5ldyBBdWRpbygpO1xubG9zc0F1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2xvc3MubXAzXCI7XG5cbmNvbnN0IHZpY3RvcnlBdWRpbyA9IG5ldyBBdWRpbygpO1xudmljdG9yeUF1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL3ZpY3RvcnkubXAzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShib3NzU3ByaXRlLCBib3NzLngsIGJvc3MueSwgYm9zcy53aWR0aCwgYm9zcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBwbGF5ZXJTcHJpdGUsXG4gICAgICBwbGF5ZXIueCxcbiAgICAgIHBsYXllci55LFxuICAgICAgcGxheWVyLndpZHRoLFxuICAgICAgcGxheWVyLmhlaWdodFxuICAgICk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGRlYWRTcHJpdGUxLFxuICAgICAgZGVhZEZyb2cueCxcbiAgICAgIGRlYWRGcm9nLnksXG4gICAgICBkZWFkRnJvZy53aWR0aCxcbiAgICAgIGRlYWRGcm9nLmhlaWdodFxuICAgICk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGRlYWRTcHJpdGUyLFxuICAgICAgZGVhZFRlcnJhLngsXG4gICAgICBkZWFkVGVycmEueSxcbiAgICAgIGRlYWRUZXJyYS53aWR0aCxcbiAgICAgIGRlYWRUZXJyYS5oZWlnaHRcbiAgICApO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuXG4gIGFuaW1hdGUoKTtcbn0pO1xuXG5mdW5jdGlvbiByZXNldFBsYXllcigpIHtcbiAgcGxheWVyLnggPSA3MDA7XG59XG4vL2F0dGFja1xuZnVuY3Rpb24gYXR0YWNrKCkge1xuICBwbGF5ZXIueCA9IDYwMDtcbiAgYXR0YWNrQXVkaW8ucGxheSgpO1xuICBsZXQgaGl0Q2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICBpZiAoaGl0Q2hhbmNlID49IDQpIHtcbiAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgcGxheWVyLmRtZztcbiAgICAvL2FwcGVuZCBkaXY/XG4gICAgYm9zcy5ocCAtPSBkbWc7XG4gICAgaWYgKGJvc3MuaHAgPCAwKSB7XG4gICAgICBib3NzLmhwID0gMDtcbiAgICB9XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZG1nLXRleHRcIik7XG4gICAgdGV4dC5hcHBlbmQoXG4gICAgICBgWW91IGRlYWx0ICR7ZG1nfSBkbWcgdG8gUmVjdXJzaW9uLCBSZWN1cnNpb24gbm93IGhhcyAke2Jvc3MuaHB9IGhwISBgXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwibWlzcy10ZXh0XCIpO1xuICAgIHRleHQuYXBwZW5kKFxuICAgICAgYFlvdSBtaXNzZWQhIFlvdSBkZWFsdCAwIGRtZyB0byB0aGUgYm9zcywgdGhlIGJvc3Mgbm93IGhhcyAke2Jvc3MuaHB9IGhwISBgXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgc2V0VGltZW91dChyZXNldFBsYXllciwgNzAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYm9zcy5hdHRhY2socGxheWVyKTtcbiAgICBib3NzQXR0QXVkaW8ucGxheSgpO1xuICB9LCAyMDAwKTtcbiAgaWYgKGJvc3MuaHAgPD0gMCkge1xuICAgIHdpbkdhbWVPdmVyKCk7XG4gIH0gZWxzZSBpZiAocGxheWVyLmhwIDw9IDApIHtcbiAgICBsb3NlR2FtZU92ZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb3NlR2FtZU92ZXIoKSB7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyXCIpO1xuICB0ZXh0LmFwcGVuZChgR2FtZSBPdmVyISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgbGVmdCEgYCk7XG4gIGJvZHkuYXBwZW5kKHRleHQpO1xuICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICBmaWdodE9uLnBhdXNlKCk7XG4gIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgbG9zc0F1ZGlvLnBsYXkoKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHdpbkdhbWVPdmVyKCkge1xuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIHRleHQuY2xhc3NMaXN0LmFkZChcImdhbWUtb3ZlclwiKTtcbiAgdGV4dC5hcHBlbmQoYFlvdSBoYXZlIGRlZmVhdGVkIFJlY3Vyc2lvbiFgKTtcbiAgYm9keS5hcHBlbmQodGV4dCk7XG4gIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gIGZpZ2h0T24ucGF1c2UoKTtcbiAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB2aWN0b3J5QXVkaW8ucGxheSgpO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBsb3NlR2FtZU92ZXIgZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgd2luR2FtZU92ZXIgZnJvbSBcIi4uL2luZGV4XCI7XG5cbmNsYXNzIEJvc3Mge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICh0aGlzLnggPSAxMDApLFxuICAgICAgKHRoaXMueSA9IDE1MCksXG4gICAgICAodGhpcy53aWR0aCA9IDI0MCksXG4gICAgICAodGhpcy5oZWlnaHQgPSAyNTYpLFxuICAgICAgKHRoaXMuaHAgPSAxMDApLFxuICAgICAgKHRoaXMubXAgPSA5OTk5KSxcbiAgICAgICh0aGlzLmRtZyA9IDExKTtcbiAgICB0aGlzLnJlc2V0ID0gdGhpcy5yZXNldC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy54ID0gMTAwO1xuICB9XG5cbiAgYXR0YWNrKHBsYXllcikge1xuICAgIHRoaXMueCA9IDIwMDtcbiAgICBsZXQgaGl0Q2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlmIChoaXRDaGFuY2UgPj0gMykge1xuICAgICAgbGV0IGRtZyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSArIHRoaXMuZG1nO1xuICAgICAgcGxheWVyLmhwIC09IGRtZztcbiAgICAgIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgICAgICBwbGF5ZXIuaHAgPSAwO1xuICAgICAgfVxuICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImJvc3MtZG1nLXRleHRcIik7XG4gICAgICB0ZXh0LmFwcGVuZChcbiAgICAgICAgYFJlY3Vyc2lvbiBkZWFsdCAke2RtZ30gdG8geW91LCB5b3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWBcbiAgICAgICk7XG4gICAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLW1pc3MtdGV4dFwiKTtcbiAgICAgIHRleHQuYXBwZW5kKGBSZWN1cnNpb24gbWlzc2VkISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVzZXQsIDcwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9zcztcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy54ID0gNzAwLFxuICAgIHRoaXMueSA9IDIwMCxcbiAgICB0aGlzLndpZHRoID0gNjIsXG4gICAgdGhpcy5oZWlnaHQgPSA2MixcbiAgICB0aGlzLmhwID0gMTAwLFxuICAgIHRoaXMubXAgPSA5OTksXG4gICAgdGhpcy5kbWcgPSAxMFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=