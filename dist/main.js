/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Boss = /*#__PURE__*/function () {
  function Boss(props) {
    _classCallCheck(this, Boss);

    this.x = 100, this.y = 150, this.width = 240, this.height = 256, this.hp = 100, this.mp = 9999, this.dmg = 12;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
  victoryAudio.play();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL2Jvc3MuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy91dGlscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCb3NzIiwicHJvcHMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaHAiLCJtcCIsImRtZyIsInJlc2V0IiwiYmluZCIsInBsYXllciIsImhpdENoYW5jZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInRleHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJQbGF5ZXIiLCJ3aW5kb3ciLCJhdHRhY2siLCJ0b2dnbGVQbGF5IiwidG9nZ2xlUGxheVNlY29uZCIsInRvZ2dsZVBsYXlUaGlyZCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJvc3MiLCJkZWFkRnJvZyIsImRlYWRUZXJyYSIsImJhdHRsZVRoZW1lIiwidm9sdW1lIiwiZmlnaHRPbiIsImplbm92YUFic29sdXRlIiwicGF1c2VkIiwicGxheSIsImN1cnJlbnRUaW1lIiwicGF1c2UiLCJib3NzU3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwicGxheWVyU3ByaXRlIiwiZGVhZFNwcml0ZTEiLCJkZWFkU3ByaXRlMiIsImF0dGFja0F1ZGlvIiwiQXVkaW8iLCJib3NzQXR0QXVkaW8iLCJsb3NzQXVkaW8iLCJ2aWN0b3J5QXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzZXRQbGF5ZXIiLCJ3aW5HYW1lT3ZlciIsImxvc2VHYW1lT3ZlciIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNoQixTQUFLQyxDQUFMLEdBQVMsR0FBVixFQUNHLEtBQUtDLENBQUwsR0FBUyxHQURaLEVBRUcsS0FBS0MsS0FBTCxHQUFhLEdBRmhCLEVBR0csS0FBS0MsTUFBTCxHQUFjLEdBSGpCLEVBSUcsS0FBS0MsRUFBTCxHQUFVLEdBSmIsRUFLRyxLQUFLQyxFQUFMLEdBQVUsSUFMYixFQU1HLEtBQUtDLEdBQUwsR0FBVyxFQU5kO0FBT0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0Q7Ozs7V0FFRCxpQkFBUTtBQUNOLFdBQUtSLENBQUwsR0FBUyxHQUFUO0FBQ0Q7OztXQUVELGdCQUFPUyxNQUFQLEVBQWU7QUFDYixXQUFLVCxDQUFMLEdBQVMsR0FBVDtBQUNBLFVBQUlVLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUFoQjs7QUFDQSxVQUFJSCxTQUFTLElBQUksQ0FBakIsRUFBb0I7QUFDbEIsWUFBSUosR0FBRyxHQUFHSyxJQUFJLENB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dUIsTUFBdkIsQ0FBWDtBQUNBSixNQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjtBQUNBTixNQUFJLENBQUNPLE1BQUwsK0JBQW1DWixNQUFNLENBQUNMLEVBQTFDO0FBQ0FhLE1BQUksQ0FBQ0ksTUFBTCxDQUFZUCxJQUFaO0FBQ0F5QyxXQUFTLENBQUNiLElBQVY7QUFDQSxNQUFNd0IsTUFBTSxHQUFHbkQsUUFBUSxDQUFDb0QsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBZjtBQUNBRCxRQUFNLENBQUNFLFFBQVAsR0FBa0IsSUFBbEI7QUFDRDs7QUFDRCxTQUFTSixXQUFULEdBQXVCO0FBQ3JCLE1BQUlsRCxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBSixNQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjtBQUNBTixNQUFJLENBQUNPLE1BQUw7QUFDQUosTUFBSSxDQUFDSSxNQUFMLENBQVlQLElBQVo7QUFDQTBDLGNBQVksQ0FBQ2QsSUFBYjtBQUNELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNsYXNzIEJvc3Mge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICh0aGlzLnggPSAxMDApLFxuICAgICAgKHRoaXMueSA9IDE1MCksXG4gICAgICAodGhpcy53aWR0aCA9IDI0MCksXG4gICAgICAodGhpcy5oZWlnaHQgPSAyNTYpLFxuICAgICAgKHRoaXMuaHAgPSAxMDApLFxuICAgICAgKHRoaXMubXAgPSA5OTk5KSxcbiAgICAgICh0aGlzLmRtZyA9IDEyKTtcbiAgICB0aGlzLnJlc2V0ID0gdGhpcy5yZXNldC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy54ID0gMTAwO1xuICB9XG5cbiAgYXR0YWNrKHBsYXllcikge1xuICAgIHRoaXMueCA9IDIwMDtcbiAgICBsZXQgaGl0Q2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlmIChoaXRDaGFuY2UgPj0gMykge1xuICAgICAgbGV0IGRtZyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKSArIHRoaXMuZG1nO1xuICAgICAgcGxheWVyLmhwIC09IGRtZztcbiAgICAgIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgICAgICBwbGF5ZXIuaHAgPSAwO1xuICAgICAgfVxuICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImJvc3MtZG1nLXRleHRcIik7XG4gICAgICB0ZXh0LmFwcGVuZChcbiAgICAgICAgYFJlY3Vyc2lvbiBkZWFsdCAke2RtZ30gdG8geW91LCB5b3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWBcbiAgICAgICk7XG4gICAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLW1pc3MtdGV4dFwiKTtcbiAgICAgIHRleHQuYXBwZW5kKGBSZWN1cnNpb24gbWlzc2VkISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVzZXQsIDcwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9zcztcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy54ID0gNzAwLFxuICAgIHRoaXMueSA9IDIwMCxcbiAgICB0aGlzLndpZHRoID0gNjIsXG4gICAgdGhpcy5oZWlnaHQgPSA2MixcbiAgICB0aGlzLmhwID0gMTAwLFxuICAgIHRoaXMubXAgPSA5OTksXG4gICAgdGhpcy5kbWcgPSAxMFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3V0aWxzL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vdXRpbHMvYm9zc1wiO1xud2luZG93LmF0dGFjayA9IGF0dGFjaztcbndpbmRvdy50b2dnbGVQbGF5ID0gdG9nZ2xlUGxheTtcbndpbmRvdy50b2dnbGVQbGF5U2Vjb25kID0gdG9nZ2xlUGxheVNlY29uZDtcbndpbmRvdy50b2dnbGVQbGF5VGhpcmQgPSB0b2dnbGVQbGF5VGhpcmQ7XG5cbi8vIGNvbnN0IGJhdHRsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhdHRsZU1lbnVcIilcbi8vIGNvbnN0IGF0dGFja0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuQ29udGFpbmVyXCIpXG4vLyBjb25zdCBhdHRhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0bkNvbnRhaW5lclwiKVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbmNvbnN0IGJvc3MgPSBuZXcgQm9zcygpO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cbmNvbnN0IGRlYWRGcm9nID0ge1xuICB4OiA3MDAsXG4gIHk6IDMwMCxcbiAgd2lkdGg6IDUwLFxuICBoZWlnaHQ6IDI4LFxufTtcblxuY29uc3QgZGVhZFRlcnJhID0ge1xuICB4OiA3MDAsXG4gIHk6IDM4MCxcbiAgd2lkdGg6IDQ4LFxuICBoZWlnaHQ6IDMyLFxufTtcblxubGV0IGJhdHRsZVRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0xXCIpO1xuYmF0dGxlVGhlbWUudm9sdW1lID0gMC4xO1xubGV0IGZpZ2h0T24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTJcIik7XG5maWdodE9uLnZvbHVtZSA9IDAuMTtcbmxldCBqZW5vdmFBYnNvbHV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtM1wiKTtcbmplbm92YUFic29sdXRlLnZvbHVtZSA9IDAuMTtcblxuZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgaWYgKGJhdHRsZVRoZW1lLnBhdXNlZCkge1xuICAgIGJhdHRsZVRoZW1lLnBsYXkoKTtcbiAgICBmaWdodE9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICBmaWdodE9uLnBhdXNlKCk7XG4gICAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICAgIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICAgIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRvZ2dsZVBsYXlTZWNvbmQoKSB7XG4gIGlmIChmaWdodE9uLnBhdXNlZCkge1xuICAgIGZpZ2h0T24ucGxheSgpO1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICAgIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gdG9nZ2xlUGxheVRoaXJkKCkge1xuICBpZiAoamVub3ZhQWJzb2x1dGUucGF1c2VkKSB7XG4gICAgamVub3ZhQWJzb2x1dGUucGxheSgpO1xuICAgIGJhdHRsZVRoZW1lLmN1cnJlbnRUaW1lID0gMDtcbiAgICBiYXR0bGVUaGVtZS5wYXVzZSgpO1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgfVxufVxuXG5jb25zdCBib3NzU3ByaXRlID0gbmV3IEltYWdlKCk7XG5ib3NzU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MuZ2lmXCI7XG5cbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYmFja2dyb3VuZC5naWZcIjtcblxuY29uc3QgcGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvQ3Jvbm8uZ2lmXCI7XG5cbmNvbnN0IGRlYWRTcHJpdGUxID0gbmV3IEltYWdlKCk7XG5kZWFkU3ByaXRlMS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9Gcm9nLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMiA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTIuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvVGVycmEuZ2lmXCI7XG5cbmNvbnN0IGF0dGFja0F1ZGlvID0gbmV3IEF1ZGlvKCk7XG5hdHRhY2tBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9hdHRhY2subXAzXCI7XG5cbmNvbnN0IGJvc3NBdHRBdWRpbyA9IG5ldyBBdWRpbygpO1xuYm9zc0F0dEF1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MubXAzXCI7XG5cbmNvbnN0IGxvc3NBdWRpbyA9IG5ldyBBdWRpbygpO1xubG9zc0F1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2xvc3MubXAzXCI7XG5cbmNvbnN0IHZpY3RvcnlBdWRpbyA9IG5ldyBBdWRpbygpO1xudmljdG9yeUF1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL3ZpY3RvcnkubXAzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShib3NzU3ByaXRlLCBib3NzLngsIGJvc3MueSwgYm9zcy53aWR0aCwgYm9zcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBwbGF5ZXJTcHJpdGUsXG4gICAgICBwbGF5ZXIueCxcbiAgICAgIHBsYXllci55LFxuICAgICAgcGxheWVyLndpZHRoLFxuICAgICAgcGxheWVyLmhlaWdodFxuICAgICk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGRlYWRTcHJpdGUxLFxuICAgICAgZGVhZEZyb2cueCxcbiAgICAgIGRlYWRGcm9nLnksXG4gICAgICBkZWFkRnJvZy53aWR0aCxcbiAgICAgIGRlYWRGcm9nLmhlaWdodFxuICAgICk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGRlYWRTcHJpdGUyLFxuICAgICAgZGVhZFRlcnJhLngsXG4gICAgICBkZWFkVGVycmEueSxcbiAgICAgIGRlYWRUZXJyYS53aWR0aCxcbiAgICAgIGRlYWRUZXJyYS5oZWlnaHRcbiAgICApO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuXG4gIGFuaW1hdGUoKTtcbn0pO1xuXG5mdW5jdGlvbiByZXNldFBsYXllcigpIHtcbiAgcGxheWVyLnggPSA3MDA7XG59XG4vL2F0dGFja1xuZnVuY3Rpb24gYXR0YWNrKCkge1xuICBwbGF5ZXIueCA9IDYwMDtcbiAgYXR0YWNrQXVkaW8ucGxheSgpO1xuICBsZXQgaGl0Q2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICBpZiAoaGl0Q2hhbmNlID49IDQpIHtcbiAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgcGxheWVyLmRtZztcbiAgICAvL2FwcGVuZCBkaXY/XG4gICAgYm9zcy5ocCAtPSBkbWc7XG4gICAgaWYgKGJvc3MuaHAgPCAwKSB7XG4gICAgICBib3NzLmhwID0gMDtcbiAgICB9XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZG1nLXRleHRcIik7XG4gICAgdGV4dC5hcHBlbmQoXG4gICAgICBgWW91IGRlYWx0ICR7ZG1nfSBkbWcgdG8gUmVjdXJzaW9uLCBSZWN1cnNpb24gbm93IGhhcyAke2Jvc3MuaHB9IGhwISBgXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwibWlzcy10ZXh0XCIpO1xuICAgIHRleHQuYXBwZW5kKFxuICAgICAgYFlvdSBtaXNzZWQhIFlvdSBkZWFsdCAwIGRtZyB0byB0aGUgYm9zcywgdGhlIGJvc3Mgbm93IGhhcyAke2Jvc3MuaHB9IGhwISBgXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgc2V0VGltZW91dChyZXNldFBsYXllciwgNzAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYm9zcy5hdHRhY2socGxheWVyKTtcbiAgICBib3NzQXR0QXVkaW8ucGxheSgpO1xuICB9LCAyMDAwKTtcbiAgaWYgKGJvc3MuaHAgPD0gMCkge1xuICAgIHdpbkdhbWVPdmVyKCk7XG4gIH0gZWxzZSBpZiAocGxheWVyLmhwIDw9IDApIHtcbiAgICBsb3NlR2FtZU92ZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb3NlR2FtZU92ZXIoKSB7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyXCIpO1xuICB0ZXh0LmFwcGVuZChgR2FtZSBPdmVyISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgbGVmdCEgYCk7XG4gIGJvZHkuYXBwZW5kKHRleHQpO1xuICBsb3NzQXVkaW8ucGxheSgpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gd2luR2FtZU92ZXIoKSB7XG4gIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyXCIpO1xuICB0ZXh0LmFwcGVuZChgWW91IGhhdmUgZGVmZWF0ZWQgUmVjdXJzaW9uIWApO1xuICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgdmljdG9yeUF1ZGlvLnBsYXkoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=