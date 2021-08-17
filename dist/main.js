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

    this.x = 100, this.y = 150, this.width = 240, this.height = 256, this.hp = 300, this.mp = 9999, this.dmg = 20;
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
}

function winGameOver() {
  var text = document.createElement("div");
  var body = document.querySelector("body");
  text.classList.add("game-over");
  text.append("You have defeated Recursion!");
  body.append(text);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL2Jvc3MuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy91dGlscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCb3NzIiwicHJvcHMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaHAiLCJtcCIsImRtZyIsInJlc2V0IiwiYmluZCIsInBsYXllciIsImhpdENoYW5jZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInRleHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJQbGF5ZXIiLCJ3aW5kb3ciLCJhdHRhY2siLCJ0b2dnbGVQbGF5IiwidG9nZ2xlUGxheVNlY29uZCIsInRvZ2dsZVBsYXlUaGlyZCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJvc3MiLCJkZWFkRnJvZyIsImRlYWRUZXJyYSIsImJhdHRsZVRoZW1lIiwidm9sdW1lIiwiZmlnaHRPbiIsImplbm92YUFic29sdXRlIiwicGF1c2VkIiwicGxheSIsImN1cnJlbnRUaW1lIiwicGF1c2UiLCJib3NzU3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJiYWNrZ3JvdW5kIiwicGxheWVyU3ByaXRlIiwiZGVhZFNwcml0ZTEiLCJkZWFkU3ByaXRlMiIsImF0dGFja0F1ZGlvIiwiQXVkaW8iLCJib3NzQXR0QXVkaW8iLCJsb3NzQXVkaW8iLCJ2aWN0b3J5QXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVzZXRQbGF5ZXIiLCJ3aW5HYW1lT3ZlciIsImxvc2VHYW1lT3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNoQixTQUFLQyxDQUFMLEdBQVMsR0FBVixFQUNHLEtBQUtDLENBQUwsR0FBUyxHQURaLEVBRUcsS0FBS0MsS0FBTCxHQUFhLEdBRmhCLEVBR0csS0FBS0MsTUFBTCxHQUFjLEdBSGpCLEVBSUcsS0FBS0MsRUFBTCxHQUFVLEdBSmIsRUFLRyxLQUFLQyxFQUFMLEdBQVUsSUFMYixFQU1HLEtBQUtDLEdBQUwsR0FBVyxFQU5kO0FBT0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0Q7Ozs7V0FFRCxpQkFBUTtBQUNOLFdBQUtSLENBQUwsR0FBUyxHQUFUO0FBQ0Q7OztXQUVELGdCQUFPUyxNQUFQLEVBQWU7QUFDYixXQUFLVCxDQUFMLEdBQVMsR0FBVDtBQUNBLFVBQUlVLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUFoQjs7QUFDQSxVQUFJSCxTQUFTLElBQUksQ0FBakIsRUFBb0I7QUFDbEIsWUFBSUosR0FBRyxHQUFHSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLElBQWlDLEtBQUtQLEdBQWhEO0FBQ0FHLGNBQU0sQ0FBQ0wsRUFBUCxJQUFhRSxHQUFiOztBQUNBLFlBQUlHLE1BQU0sQ0FBQ0wsRUFBUCxJQUFhLENBQWpCLEVBQW9CO0FBQ2xCSyxnQkFBTSxDQUFDTCxFQUFQLEdBQVksQ0FBWjtBQUNEOztBQUNELFlBQUlVLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxZQUFJQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0FKLFlBQUksQ0FBQ0ssU0FBTCxDQUFlQyxHQUFmLENBQW1CLGVBQW5CO0FBQ0FOLFlBQUksQ0FBQ08sTUFBTCwyQkFDcUJmLEdBRHJCLCtCQUM2Q0csTUFBTSxDQUFDTCxFQURwRDtBQUdBYSxZQUFJLENBQUNJLE1BQUwsQ0FBWVAsSUFBWjtBQUNBUSxrQkFBVSxDQUFDLFlBQU07QUFDZlIsY0FBSSxDQUFDUyxNQUFMO0FBQ0QsU0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELE9BaEJELE1BZ0JPO0FBQ0wsWUFBSVQsS0FBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDs7QUFDQSxZQUFJQyxLQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixNQUF2QixDQUFYOztBQUNBSixhQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixnQkFBbkI7O0FBQ0FOLGFBQUksQ0FBQ08sTUFBTCxzQ0FDZ0NaLE1BQU0sQ0FBQ0wsRUFEdkM7O0FBR0FhLGFBQUksQ0FBQ0ksTUFBTCxDQUFZUCxLQUFaOztBQUNBUSxrQkFBVSxDQUFDLFlBQU07QUFDZlIsZUFBSSxDQUFDUyxNQUFMO0FBQ0QsU0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEOztBQUNERCxnQkFBVSxDQUFDLEtBQUtmLEtBQU4sRUFBYSxHQUFiLENBQVY7QUFDRDs7Ozs7O0FBR0gsaUVBQWVULElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztJQ3JETTBCLE0sR0FDSixnQkFBWXpCLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsT0FBS0MsQ0FBTCxHQUFTLEdBQVQsRUFDQSxLQUFLQyxDQUFMLEdBQVMsR0FEVCxFQUVBLEtBQUtDLEtBQUwsR0FBYSxFQUZiLEVBR0EsS0FBS0MsTUFBTCxHQUFjLEVBSGQsRUFJQSxLQUFLQyxFQUFMLEdBQVUsR0FKVixFQUtBLEtBQUtDLEVBQUwsR0FBVSxHQUxWLEVBTUEsS0FBS0MsR0FBTCxHQUFXLEVBTlg7QUFPRCxDOztBQUNGO0FBRUQsaUVBQWVrQixNQUFmLEU7Ozs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0FDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkEsTUFBaEI7QUFDQUQsTUFBTSxDQUFDRSxVQUFQLEdBQW9CQSxVQUFwQjtBQUNBRixNQUFNLENBQUNHLGdCQUFQLEdBQTBCQSxnQkFBMUI7QUFDQUgsTUFBTSxDQUFDSSxlQUFQLEdBQXlCQSxlQUF6QixDLENBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLE1BQU0sR0FBR2YsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBSCxNQUFNLENBQUM1QixLQUFQLEdBQWUsR0FBZjtBQUNBNEIsTUFBTSxDQUFDM0IsTUFBUCxHQUFnQixHQUFoQjtBQUVBLElBQU0rQixJQUFJLEdBQUcsSUFBSXBDLGdEQUFKLEVBQWI7QUFFQSxJQUFNVyxNQUFNLEdBQUcsSUFBSWUsa0RBQUosRUFBZjtBQUVBLElBQU1XLFFBQVEsR0FBRztBQUNmbkMsR0FBQyxFQUFFLEdBRFk7QUFFZkMsR0FBQyxFQUFFLEdBRlk7QUFHZkMsT0FBSyxFQUFFLEVBSFE7QUFJZkMsUUFBTSxFQUFFO0FBSk8sQ0FBakI7QUFPQSxJQUFNaUMsU0FBUyxHQUFHO0FBQ2hCcEMsR0FBQyxFQUFFLEdBRGE7QUFFaEJDLEdBQUMsRUFBRSxHQUZhO0FBR2hCQyxPQUFLLEVBQUUsRUFIUztBQUloQkMsUUFBTSxFQUFFO0FBSlEsQ0FBbEI7QUFPQSxJQUFJa0MsV0FBVyxHQUFHdEIsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixlQUF4QixDQUFsQjtBQUNBTSxXQUFXLENBQUNDLE1BQVosR0FBcUIsR0FBckI7QUFDQSxJQUFJQyxPQUFPLEdBQUd4QixRQUFRLENBQUNnQixjQUFULENBQXdCLGVBQXhCLENBQWQ7QUFDQVEsT0FBTyxDQUFDRCxNQUFSLEdBQWlCLEdBQWpCO0FBQ0EsSUFBSUUsY0FBYyxHQUFHekIsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBUyxjQUFjLENBQUNGLE1BQWYsR0FBd0IsR0FBeEI7O0FBRUEsU0FBU1gsVUFBVCxHQUFzQjtBQUNwQixNQUFJVSxXQUFXLENBQUNJLE1BQWhCLEVBQXdCO0FBQ3RCSixlQUFXLENBQUNLLElBQVo7QUFDQUgsV0FBTyxDQUFDSSxXQUFSLEdBQXNCLENBQXRCO0FBQ0FKLFdBQU8sQ0FBQ0ssS0FBUjtBQUNBSixrQkFBYyxDQUFDRyxXQUFmLEdBQTZCLENBQTdCO0FBQ0FILGtCQUFjLENBQUNJLEtBQWY7QUFDRCxHQU5ELE1BTU87QUFDTFAsZUFBVyxDQUFDTSxXQUFaLEdBQTBCLENBQTFCO0FBQ0FOLGVBQVcsQ0FBQ08sS0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBU2hCLGdCQUFULEdBQTRCO0FBQzFCLE1BQUlXLE9BQU8sQ0FBQ0UsTUFBWixFQUFvQjtBQUNsQkYsV0FBTyxDQUFDRyxJQUFSO0FBQ0FMLGVBQVcsQ0FBQ00sV0FBWixHQUEwQixDQUExQjtBQUNBTixlQUFXLENBQUNPLEtBQVo7QUFDQUosa0JBQWMsQ0FBQ0csV0FBZixHQUE2QixDQUE3QjtBQUNBSCxrQkFBYyxDQUFDSSxLQUFmO0FBQ0QsR0FORCxNQU1PO0FBQ0xMLFdBQU8sQ0FBQ0ksV0FBUixHQUFzQixDQUF0QjtBQUNBSixXQUFPLENBQUNLLEtBQVI7QUFDRDtBQUNGOztBQUNELFNBQVNmLGVBQVQsR0FBMkI7QUFDekIsTUFBSVcsY0FBYyxDQUFDQyxNQUFuQixFQUEyQjtBQUN6QkQsa0JBQWMsQ0FBQ0UsSUFBZjtBQUNBTCxlQUFXLENBQUNNLFdBQVosR0FBMEIsQ0FBMUI7QUFDQU4sZUFBVyxDQUFDTyxLQUFaO0FBQ0FMLFdBQU8sQ0FBQ0ksV0FBUixHQUFzQixDQUF0QjtBQUNBSixXQUFPLENBQUNLLEtBQVI7QUFDRCxHQU5ELE1BTU87QUFDTEosa0JBQWMsQ0FBQ0csV0FBZixHQUE2QixDQUE3QjtBQUNBSCxrQkFBYyxDQUFDSSxLQUFmO0FBQ0Q7QUFDRjs7QUFFRCxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsS0FBSixFQUFuQjtBQUNBRCxVQUFVLENBQUNFLEdBQVgsR0FBaUIsNkJBQWpCO0FBRUEsSUFBTUMsVUFBVSxHQUFHLElBQUlGLEtBQUosRUFBbkI7QUFDQUUsVUFBVSxDQUFDRCxHQUFYLEdBQWlCLG1DQUFqQjtBQUVBLElBQU1FLFlBQVksR0FBRyxJQUFJSCxLQUFKLEVBQXJCO0FBQ0FHLFlBQVksQ0FBQ0YsR0FBYixHQUFtQiw4QkFBbkI7QUFFQSxJQUFNRyxXQUFXLEdBQUcsSUFBSUosS0FBSixFQUFwQjtBQUNBSSxXQUFXLENBQUNILEdBQVosR0FBa0IsNkJBQWxCO0FBRUEsSUFBTUksV0FBVyxHQUFHLElBQUlMLEtBQUosRUFBcEI7QUFDQUssV0FBVyxDQUFDSixHQUFaLEdBQWtCLDhCQUFsQjtBQUVBLElBQU1LLFdBQVcsR0FBRyxJQUFJQyxLQUFKLEVBQXBCO0FBQ0FELFdBQVcsQ0FBQ0wsR0FBWixHQUFrQiwrQkFBbEI7QUFFQSxJQUFNTyxZQUFZLEdBQUcsSUFBSUQsS0FBSixFQUFyQjtBQUNBQyxZQUFZLENBQUNQLEdBQWIsR0FBbUIsNkJBQW5CO0FBRUEsSUFBTVEsU0FBUyxHQUFHLElBQUlGLEtBQUosRUFBbEI7QUFDQUUsU0FBUyxDQUFDUixHQUFWLEdBQWdCLDZCQUFoQjtBQUVBLElBQU1TLFlBQVksR0FBRyxJQUFJSCxLQUFKLEVBQXJCO0FBQ0FHLFlBQVksQ0FBQ1QsR0FBYixHQUFtQixnQ0FBbkI7QUFFQWhDLFFBQVEsQ0FBQzBDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFDQyxLQUFELEVBQVc7QUFDdkQsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQjNCLE9BQUcsQ0FBQzRCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9COUIsTUFBTSxDQUFDNUIsS0FBM0IsRUFBa0M0QixNQUFNLENBQUMzQixNQUF6QztBQUNBNkIsT0FBRyxDQUFDNkIsU0FBSixDQUFjYixVQUFkLEVBQTBCLENBQTFCLEVBQTZCLENBQTdCLEVBQWdDbEIsTUFBTSxDQUFDNUIsS0FBdkMsRUFBOEM0QixNQUFNLENBQUMzQixNQUFyRDtBQUNBNkIsT0FBRyxDQUFDNkIsU0FBSixDQUFjaEIsVUFBZCxFQUEwQlgsSUFBSSxDQUFDbEMsQ0FBL0IsRUFBa0NrQyxJQUFJLENBQUNqQyxDQUF2QyxFQUEwQ2lDLElBQUksQ0FBQ2hDLEtBQS9DLEVBQXNEZ0MsSUFBSSxDQUFDL0IsTUFBM0Q7QUFDQTZCLE9BQUcsQ0FBQzZCLFNBQUosQ0FDRVosWUFERixFQUVFeEMsTUFBTSxDQUFDVCxDQUZULEVBR0VTLE1BQU0sQ0FBQ1IsQ0FIVCxFQUlFUSxNQUFNLENBQUNQLEtBSlQsRUFLRU8sTUFBTSxDQUFDTixNQUxUO0FBT0E2QixPQUFHLENBQUM2QixTQUFKLENBQ0VYLFdBREYsRUFFRWYsUUFBUSxDQUFDbkMsQ0FGWCxFQUdFbUMsUUFBUSxDQUFDbEMsQ0FIWCxFQUlFa0MsUUFBUSxDQUFDakMsS0FKWCxFQUtFaUMsUUFBUSxDQUFDaEMsTUFMWDtBQU9BNkIsT0FBRyxDQUFDNkIsU0FBSixDQUNFVixXQURGLEVBRUVmLFNBQVMsQ0FBQ3BDLENBRlosRUFHRW9DLFNBQVMsQ0FBQ25DLENBSFosRUFJRW1DLFNBQVMsQ0FBQ2xDLEtBSlosRUFLRWtDLFNBQVMsQ0FBQ2pDLE1BTFo7QUFPQTJELHlCQUFxQixDQUFDSCxPQUFELENBQXJCO0FBQ0Q7O0FBRURBLFNBQU87QUFDUixDQTlCRDs7QUFnQ0EsU0FBU0ksV0FBVCxHQUF1QjtBQUNyQnRELFFBQU0sQ0FBQ1QsQ0FBUCxHQUFXLEdBQVg7QUFDRCxDLENBQ0Q7OztBQUNBLFNBQVMwQixNQUFULEdBQWtCO0FBQ2hCakIsUUFBTSxDQUFDVCxDQUFQLEdBQVcsR0FBWDtBQUNBb0QsYUFBVyxDQUFDVixJQUFaO0FBQ0EsTUFBSWhDLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUFoQjs7QUFDQSxNQUFJSCxTQUFTLElBQUksQ0FBakIsRUFBb0I7QUFDbEIsUUFBSUosR0FBRyxHQUFHSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLElBQWlDSixNQUFNLENBQUNILEdBQWxELENBRGtCLENBRWxCOztBQUNBNEIsUUFBSSxDQUFDOUIsRUFBTCxJQUFXRSxHQUFYOztBQUNBLFFBQUk0QixJQUFJLENBQUM5QixFQUFMLEdBQVUsQ0FBZCxFQUFpQjtBQUNmOEIsVUFBSSxDQUFDOUIsRUFBTCxHQUFVLENBQVY7QUFDRDs7QUFDRCxRQUFJVSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsUUFBSUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBSixRQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixVQUFuQjtBQUNBTixRQUFJLENBQUNPLE1BQUwscUJBQ2VmLEdBRGYsa0RBQzBENEIsSUFBSSxDQUFDOUIsRUFEL0Q7QUFHQWEsUUFBSSxDQUFDSSxNQUFMLENBQVlQLElBQVo7QUFDQVEsY0FBVSxDQUFDLFlBQU07QUFDZlIsVUFBSSxDQUFDUyxNQUFMO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBakJELE1BaUJPO0FBQ0wsUUFBSVQsS0FBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDs7QUFDQSxRQUFJQyxLQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixNQUF2QixDQUFYOztBQUNBSixTQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjs7QUFDQU4sU0FBSSxDQUFDTyxNQUFMLHFFQUMrRGEsSUFBSSxDQUFDOUIsRUFEcEU7O0FBR0FhLFNBQUksQ0FBQ0ksTUFBTCxDQUFZUCxLQUFaOztBQUNBUSxjQUFVLENBQUMsWUFBTTtBQUNmUixXQUFJLENBQUNTLE1BQUw7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBQ0RELFlBQVUsQ0FBQ3lDLFdBQUQsRUFBYyxHQUFkLENBQVY7QUFDQXpDLFlBQVUsQ0FBQyxZQUFNO0FBQ2ZZLFFBQUksQ0FBQ1IsTUFBTCxDQUFZakIsTUFBWjtBQUNBNkMsZ0JBQVksQ0FBQ1osSUFBYjtBQUNELEdBSFMsRUFHUCxJQUhPLENBQVY7O0FBSUEsTUFBSVIsSUFBSSxDQUFDOUIsRUFBTCxJQUFXLENBQWYsRUFBa0I7QUFDaEI0RCxlQUFXO0FBQ1osR0FGRCxNQUVPLElBQUl2RCxNQUFNLENBQUNMLEVBQVAsSUFBYSxDQUFqQixFQUFvQjtBQUN6QjZELGdCQUFZO0FBQ2I7QUFDRjs7QUFFRCxTQUFTQSxZQUFULEdBQXdCO0FBQ3RCLE1BQUluRCxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBSixNQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjtBQUNBTixNQUFJLENBQUNPLE1BQUwsK0JBQW1DWixNQUFNLENBQUNMLEVBQTFDO0FBQ0FhLE1BQUksQ0FBQ0ksTUFBTCxDQUFZUCxJQUFaO0FBQ0F5QyxXQUFTLENBQUNiLElBQVY7QUFDRDs7QUFDRCxTQUFTc0IsV0FBVCxHQUF1QjtBQUNyQixNQUFJbEQsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLE1BQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQUosTUFBSSxDQUFDSyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsV0FBbkI7QUFDQU4sTUFBSSxDQUFDTyxNQUFMO0FBQ0FKLE1BQUksQ0FBQ0ksTUFBTCxDQUFZUCxJQUFaO0FBQ0QsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY2xhc3MgQm9zcyB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgKHRoaXMueCA9IDEwMCksXG4gICAgICAodGhpcy55ID0gMTUwKSxcbiAgICAgICh0aGlzLndpZHRoID0gMjQwKSxcbiAgICAgICh0aGlzLmhlaWdodCA9IDI1NiksXG4gICAgICAodGhpcy5ocCA9IDMwMCksXG4gICAgICAodGhpcy5tcCA9IDk5OTkpLFxuICAgICAgKHRoaXMuZG1nID0gMjApO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnggPSAxMDA7XG4gIH1cblxuICBhdHRhY2socGxheWVyKSB7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaWYgKGhpdENoYW5jZSA+PSAzKSB7XG4gICAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgdGhpcy5kbWc7XG4gICAgICBwbGF5ZXIuaHAgLT0gZG1nO1xuICAgICAgaWYgKHBsYXllci5ocCA8PSAwKSB7XG4gICAgICAgIHBsYXllci5ocCA9IDA7XG4gICAgICB9XG4gICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiYm9zcy1kbWctdGV4dFwiKTtcbiAgICAgIHRleHQuYXBwZW5kKFxuICAgICAgICBgUmVjdXJzaW9uIGRlYWx0ICR7ZG1nfSB0byB5b3UsIHlvdSBoYXZlICR7cGxheWVyLmhwfSBocCByZW1haW5pbmchYFxuICAgICAgKTtcbiAgICAgIGJvZHkuYXBwZW5kKHRleHQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImJvc3MtbWlzcy10ZXh0XCIpO1xuICAgICAgdGV4dC5hcHBlbmQoXG4gICAgICAgIGBSZWN1cnNpb24gbWlzc2VkISBZb3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWBcbiAgICAgICk7XG4gICAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQodGhpcy5yZXNldCwgNzAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3NzO1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnggPSA3MDAsXG4gICAgdGhpcy55ID0gMjAwLFxuICAgIHRoaXMud2lkdGggPSA2MixcbiAgICB0aGlzLmhlaWdodCA9IDYyLFxuICAgIHRoaXMuaHAgPSAxMDAsXG4gICAgdGhpcy5tcCA9IDk5OSxcbiAgICB0aGlzLmRtZyA9IDEwXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vdXRpbHMvcGxheWVyXCI7XG5pbXBvcnQgQm9zcyBmcm9tIFwiLi91dGlscy9ib3NzXCI7XG53aW5kb3cuYXR0YWNrID0gYXR0YWNrO1xud2luZG93LnRvZ2dsZVBsYXkgPSB0b2dnbGVQbGF5O1xud2luZG93LnRvZ2dsZVBsYXlTZWNvbmQgPSB0b2dnbGVQbGF5U2Vjb25kO1xud2luZG93LnRvZ2dsZVBsYXlUaGlyZCA9IHRvZ2dsZVBsYXlUaGlyZDtcblxuLy8gY29uc3QgYmF0dGxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmF0dGxlTWVudVwiKVxuLy8gY29uc3QgYXR0YWNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5Db250YWluZXJcIilcbi8vIGNvbnN0IGF0dGFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuQ29udGFpbmVyXCIpXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGRcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDYwMDtcblxuY29uc3QgYm9zcyA9IG5ldyBCb3NzKCk7XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcblxuY29uc3QgZGVhZEZyb2cgPSB7XG4gIHg6IDcwMCxcbiAgeTogMzAwLFxuICB3aWR0aDogNTAsXG4gIGhlaWdodDogMjgsXG59O1xuXG5jb25zdCBkZWFkVGVycmEgPSB7XG4gIHg6IDcwMCxcbiAgeTogMzgwLFxuICB3aWR0aDogNDgsXG4gIGhlaWdodDogMzIsXG59O1xuXG5sZXQgYmF0dGxlVGhlbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTFcIik7XG5iYXR0bGVUaGVtZS52b2x1bWUgPSAwLjE7XG5sZXQgZmlnaHRPbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtMlwiKTtcbmZpZ2h0T24udm9sdW1lID0gMC4xO1xubGV0IGplbm92YUFic29sdXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0zXCIpO1xuamVub3ZhQWJzb2x1dGUudm9sdW1lID0gMC4xO1xuXG5mdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICBpZiAoYmF0dGxlVGhlbWUucGF1c2VkKSB7XG4gICAgYmF0dGxlVGhlbWUucGxheSgpO1xuICAgIGZpZ2h0T24uY3VycmVudFRpbWUgPSAwO1xuICAgIGZpZ2h0T24ucGF1c2UoKTtcbiAgICBqZW5vdmFBYnNvbHV0ZS5jdXJyZW50VGltZSA9IDA7XG4gICAgamVub3ZhQWJzb2x1dGUucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBiYXR0bGVUaGVtZS5jdXJyZW50VGltZSA9IDA7XG4gICAgYmF0dGxlVGhlbWUucGF1c2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gdG9nZ2xlUGxheVNlY29uZCgpIHtcbiAgaWYgKGZpZ2h0T24ucGF1c2VkKSB7XG4gICAgZmlnaHRPbi5wbGF5KCk7XG4gICAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICAgIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gICAgamVub3ZhQWJzb2x1dGUuY3VycmVudFRpbWUgPSAwO1xuICAgIGplbm92YUFic29sdXRlLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gICAgZmlnaHRPbi5wYXVzZSgpO1xuICB9XG59XG5mdW5jdGlvbiB0b2dnbGVQbGF5VGhpcmQoKSB7XG4gIGlmIChqZW5vdmFBYnNvbHV0ZS5wYXVzZWQpIHtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wbGF5KCk7XG4gICAgYmF0dGxlVGhlbWUuY3VycmVudFRpbWUgPSAwO1xuICAgIGJhdHRsZVRoZW1lLnBhdXNlKCk7XG4gICAgZmlnaHRPbi5jdXJyZW50VGltZSA9IDA7XG4gICAgZmlnaHRPbi5wYXVzZSgpO1xuICB9IGVsc2Uge1xuICAgIGplbm92YUFic29sdXRlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBqZW5vdmFBYnNvbHV0ZS5wYXVzZSgpO1xuICB9XG59XG5cbmNvbnN0IGJvc3NTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbmJvc3NTcHJpdGUuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYm9zcy5naWZcIjtcblxuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9iYWNrZ3JvdW5kLmdpZlwiO1xuXG5jb25zdCBwbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbnBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9Dcm9uby5naWZcIjtcblxuY29uc3QgZGVhZFNwcml0ZTEgPSBuZXcgSW1hZ2UoKTtcbmRlYWRTcHJpdGUxLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL0Zyb2cuZ2lmXCI7XG5cbmNvbnN0IGRlYWRTcHJpdGUyID0gbmV3IEltYWdlKCk7XG5kZWFkU3ByaXRlMi5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9UZXJyYS5naWZcIjtcblxuY29uc3QgYXR0YWNrQXVkaW8gPSBuZXcgQXVkaW8oKTtcbmF0dGFja0F1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2F0dGFjay5tcDNcIjtcblxuY29uc3QgYm9zc0F0dEF1ZGlvID0gbmV3IEF1ZGlvKCk7XG5ib3NzQXR0QXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYm9zcy5tcDNcIjtcblxuY29uc3QgbG9zc0F1ZGlvID0gbmV3IEF1ZGlvKCk7XG5sb3NzQXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvbG9zcy5tcDNcIjtcblxuY29uc3QgdmljdG9yeUF1ZGlvID0gbmV3IEF1ZGlvKCk7XG52aWN0b3J5QXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvdmljdG9yeS5tcDNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2ZW50KSA9PiB7XG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKGJvc3NTcHJpdGUsIGJvc3MueCwgYm9zcy55LCBib3NzLndpZHRoLCBib3NzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHBsYXllclNwcml0ZSxcbiAgICAgIHBsYXllci54LFxuICAgICAgcGxheWVyLnksXG4gICAgICBwbGF5ZXIud2lkdGgsXG4gICAgICBwbGF5ZXIuaGVpZ2h0XG4gICAgKTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZGVhZFNwcml0ZTEsXG4gICAgICBkZWFkRnJvZy54LFxuICAgICAgZGVhZEZyb2cueSxcbiAgICAgIGRlYWRGcm9nLndpZHRoLFxuICAgICAgZGVhZEZyb2cuaGVpZ2h0XG4gICAgKTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZGVhZFNwcml0ZTIsXG4gICAgICBkZWFkVGVycmEueCxcbiAgICAgIGRlYWRUZXJyYS55LFxuICAgICAgZGVhZFRlcnJhLndpZHRoLFxuICAgICAgZGVhZFRlcnJhLmhlaWdodFxuICAgICk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG5cbiAgYW5pbWF0ZSgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlc2V0UGxheWVyKCkge1xuICBwbGF5ZXIueCA9IDcwMDtcbn1cbi8vYXR0YWNrXG5mdW5jdGlvbiBhdHRhY2soKSB7XG4gIHBsYXllci54ID0gNjAwO1xuICBhdHRhY2tBdWRpby5wbGF5KCk7XG4gIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGlmIChoaXRDaGFuY2UgPj0gNCkge1xuICAgIGxldCBkbWcgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgKyBwbGF5ZXIuZG1nO1xuICAgIC8vYXBwZW5kIGRpdj9cbiAgICBib3NzLmhwIC09IGRtZztcbiAgICBpZiAoYm9zcy5ocCA8IDApIHtcbiAgICAgIGJvc3MuaHAgPSAwO1xuICAgIH1cbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJkbWctdGV4dFwiKTtcbiAgICB0ZXh0LmFwcGVuZChcbiAgICAgIGBZb3UgZGVhbHQgJHtkbWd9IGRtZyB0byBSZWN1cnNpb24sIFJlY3Vyc2lvbiBub3cgaGFzICR7Ym9zcy5ocH0gaHAhIGBcbiAgICApO1xuICAgIGJvZHkuYXBwZW5kKHRleHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICB9LCAyMDAwKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJtaXNzLXRleHRcIik7XG4gICAgdGV4dC5hcHBlbmQoXG4gICAgICBgWW91IG1pc3NlZCEgWW91IGRlYWx0IDAgZG1nIHRvIHRoZSBib3NzLCB0aGUgYm9zcyBub3cgaGFzICR7Ym9zcy5ocH0gaHAhIGBcbiAgICApO1xuICAgIGJvZHkuYXBwZW5kKHRleHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuICBzZXRUaW1lb3V0KHJlc2V0UGxheWVyLCA3MDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBib3NzLmF0dGFjayhwbGF5ZXIpO1xuICAgIGJvc3NBdHRBdWRpby5wbGF5KCk7XG4gIH0sIDIwMDApO1xuICBpZiAoYm9zcy5ocCA8PSAwKSB7XG4gICAgd2luR2FtZU92ZXIoKTtcbiAgfSBlbHNlIGlmIChwbGF5ZXIuaHAgPD0gMCkge1xuICAgIGxvc2VHYW1lT3ZlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvc2VHYW1lT3ZlcigpIHtcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJcIik7XG4gIHRleHQuYXBwZW5kKGBHYW1lIE92ZXIhIFlvdSBoYXZlICR7cGxheWVyLmhwfSBocCBsZWZ0ISBgKTtcbiAgYm9keS5hcHBlbmQodGV4dCk7XG4gIGxvc3NBdWRpby5wbGF5KCk7XG59XG5mdW5jdGlvbiB3aW5HYW1lT3ZlcigpIHtcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXJcIik7XG4gIHRleHQuYXBwZW5kKGBZb3UgaGF2ZSBkZWZlYXRlZCBSZWN1cnNpb24hYCk7XG4gIGJvZHkuYXBwZW5kKHRleHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==