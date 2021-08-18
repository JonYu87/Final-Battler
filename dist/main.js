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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvLi9zcmMvdXRpbHMvYm9zcy5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhdHRhY2siLCJ0b2dnbGVQbGF5IiwidG9nZ2xlUGxheVNlY29uZCIsInRvZ2dsZVBsYXlUaGlyZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3NzIiwiQm9zcyIsInBsYXllciIsIlBsYXllciIsImRlYWRGcm9nIiwieCIsInkiLCJkZWFkVGVycmEiLCJiYXR0bGVUaGVtZSIsInZvbHVtZSIsImZpZ2h0T24iLCJqZW5vdmFBYnNvbHV0ZSIsInBhdXNlZCIsInBsYXkiLCJjdXJyZW50VGltZSIsInBhdXNlIiwiYm9zc1Nwcml0ZSIsIkltYWdlIiwic3JjIiwiYmFja2dyb3VuZCIsInBsYXllclNwcml0ZSIsImRlYWRTcHJpdGUxIiwiZGVhZFNwcml0ZTIiLCJhdHRhY2tBdWRpbyIsIkF1ZGlvIiwiYm9zc0F0dEF1ZGlvIiwibG9zc0F1ZGlvIiwidmljdG9yeUF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc2V0UGxheWVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJoaXRDaGFuY2UiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJkbWciLCJocCIsInRleHQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwid2luR2FtZU92ZXIiLCJsb3NlR2FtZU92ZXIiLCJwcm9wcyIsIm1wIiwicmVzZXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0FELE1BQU0sQ0FBQ0UsVUFBUCxHQUFvQkEsVUFBcEI7QUFDQUYsTUFBTSxDQUFDRyxnQkFBUCxHQUEwQkEsZ0JBQTFCO0FBQ0FILE1BQU0sQ0FBQ0ksZUFBUCxHQUF5QkEsZUFBekIsQyxDQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBSixNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmO0FBQ0FMLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixHQUFoQjtBQUVBLElBQU1DLElBQUksR0FBRyxJQUFJQyxnREFBSixFQUFiO0FBRUEsSUFBTUMsTUFBTSxHQUFHLElBQUlDLGtEQUFKLEVBQWY7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsR0FBQyxFQUFFLEdBRFk7QUFFZkMsR0FBQyxFQUFFLEdBRlk7QUFHZlIsT0FBSyxFQUFFLEVBSFE7QUFJ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QUFtQjtBQUFBOztBQUNqQixPQUFLakQsQ0FBTCxHQUFTLEdBQVQsRUFDQSxLQUFLQyxDQUFMLEdBQVMsR0FEVCxFQUVBLEtBQUtSLEtBQUwsR0FBYSxFQUZiLEVBR0EsS0FBS0MsTUFBTCxHQUFjLEVBSGQsRUFJQSxLQUFLMkMsRUFBTCxHQUFVLEdBSlYsRUFLQSxLQUFLYSxFQUFMLEdBQVUsR0FMVixFQU1BLEtBQUtkLEdBQUwsR0FBVyxFQU5YO0FBT0QsQzs7QUFDRjtBQUVELGlFQUFldEMsTUFBZixFOzs7Ozs7Ozs7OztBQ1pBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3V0aWxzL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vdXRpbHMvYm9zc1wiO1xud2luZG93LmF0dGFjayA9IGF0dGFjaztcbndpbmRvdy50b2dnbGVQbGF5ID0gdG9nZ2xlUGxheTtcbndpbmRvdy50b2dnbGVQbGF5U2Vjb25kID0gdG9nZ2xlUGxheVNlY29uZDtcbndpbmRvdy50b2dnbGVQbGF5VGhpcmQgPSB0b2dnbGVQbGF5VGhpcmQ7XG5cbi8vIGNvbnN0IGJhdHRsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhdHRsZU1lbnVcIilcbi8vIGNvbnN0IGF0dGFja0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuQ29udGFpbmVyXCIpXG4vLyBjb25zdCBhdHRhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0bkNvbnRhaW5lclwiKVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbmNvbnN0IGJvc3MgPSBuZXcgQm9zcygpO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cbmNvbnN0IGRlYWRGcm9nID0ge1xuICB4OiA3MDAsXG4gIHk6IDMwMCxcbiAgd2lkdGg6IDUwLFxuICBoZWlnaHQ6IDI4LFxufTtcblxuY29uc3QgZGVhZFRlcnJhID0ge1xuICB4OiA3MDAsXG4gIHk6IDM4MCxcbiAgd2lkdGg6IDQ4LFxuICBoZWlnaHQ6IDMyLFxufTtcblxubGV0IGJhdHRsZVRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0xXCIpO1xuYmF0dGxlVGhlbWUudm9sdW1lID0gMC4zO1xubGV0IGZpZ2h0T24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTJcIik7XG5maWdodE9uLnZvbHVtZSA9IDAuMztcbmxldCBqZW5vdmFBYnNvbHV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtM1wiKTtcbmplbm92YUFic29sdXRlLnZvbHVtZSA9IDAuMztcblxuZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgaWYgKGJhdHRsZVRoZW1lLnBhdXNlZCkge1xuICAgIGJhdHRsZVRoZW1lLnBsYXkoKTtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gICAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICAgIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICAgIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRvZ2dsZVBsYXlTZWNvbmQoKSB7XG4gIGlmIChmaWdodE9uLnBhdXNlZCkge1xuICAgIGZpZ2h0T24ucGxheSgpO1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICAgIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gdG9nZ2xlUGxheVRoaXJkKCkge1xuICBpZiAoamVub3ZhQWJzb2x1dGUucGF1c2VkKSB7XG4gICAgamVub3ZhQWJzb2x1dGUucGxheSgpO1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgfVxufVxuXG5jb25zdCBib3NzU3ByaXRlID0gbmV3IEltYWdlKCk7XG5ib3NzU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MuZ2lmXCI7XG5cbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYmFja2dyb3VuZC5naWZcIjtcblxuY29uc3QgcGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvQ3Jvbm8uZ2lmXCI7XG5cbmNvbnN0IGRlYWRTcHJpdGUxID0gbmV3IEltYWdlKCk7XG5kZWFkU3ByaXRlMS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9Gcm9nLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMiA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTIuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvVGVycmEuZ2lmXCI7XG5cbmNvbnN0IGF0dGFja0F1ZGlvID0gbmV3IEF1ZGlvKCk7XG5hdHRhY2tBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9hdHRhY2subXAzXCI7XG5cbmNvbnN0IGJvc3NBdHRBdWRpbyA9IG5ldyBBdWRpbygpO1xuYm9zc0F0dEF1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MubXAzXCI7XG5cbmNvbnN0IGxvc3NBdWRpbyA9IG5ldyBBdWRpbygpO1xubG9zc0F1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2xvc3MubXAzXCI7XG5cbmNvbnN0IHZpY3RvcnlBdWRpbyA9IG5ldyBBdWRpbygpO1xudmljdG9yeUF1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL3ZpY3RvcnkubXAzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShib3NzU3ByaXRlLCBib3NzLngsIGJvc3MueSwgYm9zcy53aWR0aCwgYm9zcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBwbGF5ZXJTcHJpdGUsXG4gICAgICBwbGF5ZXIueCxcbiAgICAgIHBsYXllci55LFxuICAgICAgcGxheWVyLndpZHRoLFxuICAgICAgcGxheWVyLmhlaWdodFxuICAgICk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGRlYWRTcHJpdGUxLFxuICAgICAgZGVhZEZyb2cueCxcbiAgICAgIGRlYWRGcm9nLnksXG4gICAgICBkZWFkRnJvZy53aWR0aCxcbiAgICAgIGRlYWRGcm9nLmhlaWdodFxuICAgICk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGRlYWRTcHJpdGUyLFxuICAgICAgZGVhZFRlcnJhLngsXG4gICAgICBkZWFkVGVycmEueSxcbiAgICAgIGRlYWRUZXJyYS53aWR0aCxcbiAgICAgIGRlYWRUZXJyYS5oZWlnaHRcbiAgICApO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuXG4gIGFuaW1hdGUoKTtcbn0pO1xuXG5mdW5jdGlvbiByZXNldFBsYXllcigpIHtcbiAgcGxheWVyLnggPSA3MDA7XG59XG4vL2F0dGFja1xuZnVuY3Rpb24gYXR0YWNrKCkge1xuICBwbGF5ZXIueCA9IDYwMDtcbiAgYXR0YWNrQXVkaW8ucGxheSgpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0blwiKTtcbiAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgbGV0IGhpdENoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgaWYgKGhpdENoYW5jZSA+PSA0KSB7XG4gICAgbGV0IGRtZyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSArIHBsYXllci5kbWc7XG4gICAgLy9hcHBlbmQgZGl2P1xuICAgIGJvc3MuaHAgLT0gZG1nO1xuICAgIGlmIChib3NzLmhwIDwgMCkge1xuICAgICAgYm9zcy5ocCA9IDA7XG4gICAgfVxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZG1nLXRleHRcIik7XG4gICAgdGV4dC5hcHBlbmQoXG4gICAgICBgWW91IGRlYWx0ICR7ZG1nfSBkbWcgdG8gUmVjdXJzaW9uLCBSZWN1cnNpb24gbm93IGhhcyAke2Jvc3MuaHB9IGhwISBgXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJtaXNzLXRleHRcIik7XG4gICAgdGV4dC5hcHBlbmQoXG4gICAgICBgWW91IG1pc3NlZCEgWW91IGRlYWx0IDAgZG1nIHRvIHRoZSBib3NzLCB0aGUgYm9zcyBub3cgaGFzICR7Ym9zcy5ocH0gaHAhIGBcbiAgICApO1xuICAgIGJvZHkuYXBwZW5kKHRleHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuICBzZXRUaW1lb3V0KHJlc2V0UGxheWVyLCA3MDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBib3NzLmF0dGFjayhwbGF5ZXIpO1xuICAgIGJvc3NBdHRBdWRpby5wbGF5KCk7XG4gIH0sIDIwMDApO1xuICBpZiAoYm9zcy5ocCA8PSAwKSB7XG4gICAgd2luR2FtZU92ZXIoKTtcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHBsYXllci5ocCA8PSAwKSB7XG4gICAgbG9zZUdhbWVPdmVyKCk7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb3NlR2FtZU92ZXIoKSB7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJcIik7XG4gIHRleHQuYXBwZW5kKGBHYW1lIE92ZXIhIFlvdSBoYXZlICR7cGxheWVyLmhwfSBocCBsZWZ0IWApO1xuICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgZmlnaHRPbi5wYXVzZSgpO1xuICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIGxvc3NBdWRpby5wbGF5KCk7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuXCIpO1xuICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gd2luR2FtZU92ZXIoKSB7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJcIik7XG4gIHRleHQuYXBwZW5kKGBZb3UgaGF2ZSBkZWZlYXRlZCBSZWN1cnNpb24hYCk7XG4gIGJvZHkuYXBwZW5kKHRleHQpO1xuICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICBmaWdodE9uLnBhdXNlKCk7XG4gIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgdmljdG9yeUF1ZGlvLnBsYXkoKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5cIik7XG4gIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGxvc2VHYW1lT3ZlciBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB3aW5HYW1lT3ZlciBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY2xhc3MgQm9zcyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgKHRoaXMueCA9IDEwMCksXG4gICAgICAodGhpcy55ID0gMTUwKSxcbiAgICAgICh0aGlzLndpZHRoID0gMjQwKSxcbiAgICAgICh0aGlzLmhlaWdodCA9IDI1NiksXG4gICAgICAodGhpcy5ocCA9IDEwMCksXG4gICAgICAodGhpcy5tcCA9IDk5OTkpLFxuICAgICAgKHRoaXMuZG1nID0gMTEpO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnggPSAxMDA7XG4gIH1cblxuICBhdHRhY2socGxheWVyKSB7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaWYgKGhpdENoYW5jZSA+PSAzKSB7XG4gICAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgdGhpcy5kbWc7XG4gICAgICBwbGF5ZXIuaHAgLT0gZG1nO1xuICAgICAgaWYgKHBsYXllci5ocCA8PSAwKSB7XG4gICAgICAgIHBsYXllci5ocCA9IDA7XG4gICAgICB9XG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLWRtZy10ZXh0XCIpO1xuICAgICAgdGV4dC5hcHBlbmQoXG4gICAgICAgIGBSZWN1cnNpb24gZGVhbHQgJHtkbWd9IHRvIHlvdSwgeW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIHJlbWFpbmluZyFgXG4gICAgICApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLW1pc3MtdGV4dFwiKTtcbiAgICAgIHRleHQuYXBwZW5kKGBSZWN1cnNpb24gbWlzc2VkISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICB3aW5HYW1lT3ZlcigpO1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgICAgICBsb3NlR2FtZU92ZXIoKTtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCh0aGlzLnJlc2V0LCA3MDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvc3M7XG4iLCJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMueCA9IDcwMCxcbiAgICB0aGlzLnkgPSAyMDAsXG4gICAgdGhpcy53aWR0aCA9IDYyLFxuICAgIHRoaXMuaGVpZ2h0ID0gNjIsXG4gICAgdGhpcy5ocCA9IDEwMCxcbiAgICB0aGlzLm1wID0gOTk5LFxuICAgIHRoaXMuZG1nID0gMTBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9