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

    this.x = 100, this.y = 150, this.width = 240, this.height = 256, this.hp = 3000, this.mp = 9999, this.dmg = 50;
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

  this.x = 700, this.y = 200, this.width = 62, this.height = 62, this.hp = 999, this.mp = 999, this.dmg = 50;
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
  return battleTheme.paused ? battleTheme.play() : battleTheme.pause();
}

function togglePlaySecond() {
  return fightOn.paused ? fightOn.play() : fightOn.pause();
}

function togglePlayThird() {
  return jenovaAbsolute.paused ? jenovaAbsolute.play() : jenovaAbsolute.pause();
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
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL2Jvc3MuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy91dGlscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCb3NzIiwicHJvcHMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaHAiLCJtcCIsImRtZyIsInJlc2V0IiwiYmluZCIsInBsYXllciIsImhpdENoYW5jZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInRleHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJQbGF5ZXIiLCJ3aW5kb3ciLCJhdHRhY2siLCJ0b2dnbGVQbGF5IiwidG9nZ2xlUGxheVNlY29uZCIsInRvZ2dsZVBsYXlUaGlyZCIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJvc3MiLCJkZWFkRnJvZyIsImRlYWRUZXJyYSIsImJhdHRsZVRoZW1lIiwidm9sdW1lIiwiZmlnaHRPbiIsImplbm92YUFic29sdXRlIiwicGF1c2VkIiwicGxheSIsInBhdXNlIiwiYm9zc1Nwcml0ZSIsIkltYWdlIiwic3JjIiwiYmFja2dyb3VuZCIsInBsYXllclNwcml0ZSIsImRlYWRTcHJpdGUxIiwiZGVhZFNwcml0ZTIiLCJhdHRhY2tBdWRpbyIsIkF1ZGlvIiwiYm9zc0F0dEF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc2V0UGxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2hCLFNBQUtDLENBQUwsR0FBUyxHQUFWLEVBQ0csS0FBS0MsQ0FBTCxHQUFTLEdBRFosRUFFRyxLQUFLQyxLQUFMLEdBQWEsR0FGaEIsRUFHRyxLQUFLQyxNQUFMLEdBQWMsR0FIakIsRUFJRyxLQUFLQyxFQUFMLEdBQVUsSUFKYixFQUtHLEtBQUtDLEVBQUwsR0FBVSxJQUxiLEVBTUcsS0FBS0MsR0FBTCxHQUFXLEVBTmQ7QUFPQSxTQUFLQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQWI7QUFDRDs7OztXQUVELGlCQUFRO0FBQ04sV0FBS1IsQ0FBTCxHQUFTLEdBQVQ7QUFDRDs7O1dBRUQsZ0JBQU9TLE1BQVAsRUFBZTtBQUNiLFdBQUtULENBQUwsR0FBUyxHQUFUO0FBQ0EsVUFBSVUsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQWhCOztBQUNBLFVBQUlILFNBQVMsSUFBSSxDQUFqQixFQUFvQjtBQUNsQixZQUFJSixHQUFHLEdBQUdLLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsS0FBS1AsR0FBaEQ7QUFDQUcsY0FBTSxDQUFDTCxFQUFQLElBQWFFLEdBQWI7QUFDQSxZQUFJUSxJQUFJ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Q0FBQ08sTUFBTCxxQkFDZWYsR0FEZixrREFDMEQ0QixJQUFJLENBQUM5QixFQUQvRDtBQUdBYSxRQUFJLENBQUNJLE1BQUwsQ0FBWVAsSUFBWjtBQUNBUSxjQUFVLENBQUMsWUFBTTtBQUNmUixVQUFJLENBQUNTLE1BQUw7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FkRCxNQWNPO0FBQ0wsUUFBSVQsS0FBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDs7QUFDQSxRQUFJQyxLQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixNQUF2QixDQUFYOztBQUNBSixTQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjs7QUFDQU4sU0FBSSxDQUFDTyxNQUFMLHFFQUMrRGEsSUFBSSxDQUFDOUIsRUFEcEU7O0FBR0FhLFNBQUksQ0FBQ0ksTUFBTCxDQUFZUCxLQUFaOztBQUNBUSxjQUFVLENBQUMsWUFBTTtBQUNmUixXQUFJLENBQUNTLE1BQUw7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBQ0RELFlBQVUsQ0FBQ3NDLFdBQUQsRUFBYyxHQUFkLENBQVY7QUFDQXRDLFlBQVUsQ0FBQyxZQUFNO0FBQ2ZZLFFBQUksQ0FBQ1IsTUFBTCxDQUFZakIsTUFBWjtBQUNBNEMsZ0JBQVksQ0FBQ1gsSUFBYjtBQUNELEdBSFMsRUFHUCxJQUhPLENBQVY7QUFJRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jbGFzcyBCb3NzIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAodGhpcy54ID0gMTAwKSxcbiAgICAgICh0aGlzLnkgPSAxNTApLFxuICAgICAgKHRoaXMud2lkdGggPSAyNDApLFxuICAgICAgKHRoaXMuaGVpZ2h0ID0gMjU2KSxcbiAgICAgICh0aGlzLmhwID0gMzAwMCksXG4gICAgICAodGhpcy5tcCA9IDk5OTkpLFxuICAgICAgKHRoaXMuZG1nID0gNTApO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnggPSAxMDA7XG4gIH1cblxuICBhdHRhY2socGxheWVyKSB7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaWYgKGhpdENoYW5jZSA+PSAzKSB7XG4gICAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgdGhpcy5kbWc7XG4gICAgICBwbGF5ZXIuaHAgLT0gZG1nO1xuICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImJvc3MtZG1nLXRleHRcIik7XG4gICAgICB0ZXh0LmFwcGVuZChcbiAgICAgICAgYFJlY3Vyc2lvbiBkZWFsdCAke2RtZ30gdG8geW91LCB5b3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWBcbiAgICAgICk7XG4gICAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLW1pc3MtdGV4dFwiKTtcbiAgICAgIHRleHQuYXBwZW5kKFxuICAgICAgICBgUmVjdXJzaW9uIG1pc3NlZCEgWW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIHJlbWFpbmluZyFgXG4gICAgICApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVzZXQsIDcwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9zcztcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy54ID0gNzAwLFxuICAgIHRoaXMueSA9IDIwMCxcbiAgICB0aGlzLndpZHRoID0gNjIsXG4gICAgdGhpcy5oZWlnaHQgPSA2MixcbiAgICB0aGlzLmhwID0gOTk5LFxuICAgIHRoaXMubXAgPSA5OTksXG4gICAgdGhpcy5kbWcgPSA1MFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3V0aWxzL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vdXRpbHMvYm9zc1wiO1xud2luZG93LmF0dGFjayA9IGF0dGFjaztcbndpbmRvdy50b2dnbGVQbGF5ID0gdG9nZ2xlUGxheTtcbndpbmRvdy50b2dnbGVQbGF5U2Vjb25kID0gdG9nZ2xlUGxheVNlY29uZDtcbndpbmRvdy50b2dnbGVQbGF5VGhpcmQgPSB0b2dnbGVQbGF5VGhpcmQ7XG5cbi8vIGNvbnN0IGJhdHRsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhdHRsZU1lbnVcIilcbi8vIGNvbnN0IGF0dGFja0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuQ29udGFpbmVyXCIpXG4vLyBjb25zdCBhdHRhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0bkNvbnRhaW5lclwiKVxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNhbnZhcy53aWR0aCA9IDgwMDtcbmNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbmNvbnN0IGJvc3MgPSBuZXcgQm9zcygpO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cbmNvbnN0IGRlYWRGcm9nID0ge1xuICB4OiA3MDAsXG4gIHk6IDMwMCxcbiAgd2lkdGg6IDUwLFxuICBoZWlnaHQ6IDI4LFxufTtcblxuY29uc3QgZGVhZFRlcnJhID0ge1xuICB4OiA3MDAsXG4gIHk6IDM4MCxcbiAgd2lkdGg6IDQ4LFxuICBoZWlnaHQ6IDMyLFxufTtcblxubGV0IGJhdHRsZVRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1tdXNpYy0xXCIpO1xuYmF0dGxlVGhlbWUudm9sdW1lID0gMC4xO1xubGV0IGZpZ2h0T24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljLTJcIik7XG5maWdodE9uLnZvbHVtZSA9IDAuMTtcbmxldCBqZW5vdmFBYnNvbHV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWMtM1wiKTtcbmplbm92YUFic29sdXRlLnZvbHVtZSA9IDAuMTtcblxuZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgcmV0dXJuIGJhdHRsZVRoZW1lLnBhdXNlZCA/IGJhdHRsZVRoZW1lLnBsYXkoKSA6IGJhdHRsZVRoZW1lLnBhdXNlKCk7XG59XG5mdW5jdGlvbiB0b2dnbGVQbGF5U2Vjb25kKCkge1xuICByZXR1cm4gZmlnaHRPbi5wYXVzZWQgPyBmaWdodE9uLnBsYXkoKSA6IGZpZ2h0T24ucGF1c2UoKTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZVBsYXlUaGlyZCgpIHtcbiAgcmV0dXJuIGplbm92YUFic29sdXRlLnBhdXNlZCA/IGplbm92YUFic29sdXRlLnBsYXkoKSA6IGplbm92YUFic29sdXRlLnBhdXNlKCk7XG59XG5cbmNvbnN0IGJvc3NTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbmJvc3NTcHJpdGUuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYm9zcy5naWZcIjtcblxuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9iYWNrZ3JvdW5kLmdpZlwiO1xuXG5jb25zdCBwbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbnBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9Dcm9uby5naWZcIjtcblxuY29uc3QgZGVhZFNwcml0ZTEgPSBuZXcgSW1hZ2UoKTtcbmRlYWRTcHJpdGUxLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL0Zyb2cuZ2lmXCI7XG5cbmNvbnN0IGRlYWRTcHJpdGUyID0gbmV3IEltYWdlKCk7XG5kZWFkU3ByaXRlMi5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9UZXJyYS5naWZcIjtcblxuY29uc3QgYXR0YWNrQXVkaW8gPSBuZXcgQXVkaW8oKTtcbmF0dGFja0F1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2F0dGFjay5tcDNcIjtcblxuY29uc3QgYm9zc0F0dEF1ZGlvID0gbmV3IEF1ZGlvKCk7XG5ib3NzQXR0QXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYm9zcy5tcDNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2ZW50KSA9PiB7XG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZHJhd0ltYWdlKGJvc3NTcHJpdGUsIGJvc3MueCwgYm9zcy55LCBib3NzLndpZHRoLCBib3NzLmhlaWdodCk7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIHBsYXllclNwcml0ZSxcbiAgICAgIHBsYXllci54LFxuICAgICAgcGxheWVyLnksXG4gICAgICBwbGF5ZXIud2lkdGgsXG4gICAgICBwbGF5ZXIuaGVpZ2h0XG4gICAgKTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZGVhZFNwcml0ZTEsXG4gICAgICBkZWFkRnJvZy54LFxuICAgICAgZGVhZEZyb2cueSxcbiAgICAgIGRlYWRGcm9nLndpZHRoLFxuICAgICAgZGVhZEZyb2cuaGVpZ2h0XG4gICAgKTtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZGVhZFNwcml0ZTIsXG4gICAgICBkZWFkVGVycmEueCxcbiAgICAgIGRlYWRUZXJyYS55LFxuICAgICAgZGVhZFRlcnJhLndpZHRoLFxuICAgICAgZGVhZFRlcnJhLmhlaWdodFxuICAgICk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG5cbiAgYW5pbWF0ZSgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlc2V0UGxheWVyKCkge1xuICBwbGF5ZXIueCA9IDcwMDtcbn1cbi8vYXR0YWNrXG5mdW5jdGlvbiBhdHRhY2soKSB7XG4gIHBsYXllci54ID0gNjAwO1xuICBhdHRhY2tBdWRpby5wbGF5KCk7XG4gIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGlmIChoaXRDaGFuY2UgPj0gNCkge1xuICAgIGxldCBkbWcgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgKyBwbGF5ZXIuZG1nO1xuICAgIC8vYXBwZW5kIGRpdj9cbiAgICBib3NzLmhwIC09IGRtZztcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJkbWctdGV4dFwiKTtcbiAgICB0ZXh0LmFwcGVuZChcbiAgICAgIGBZb3UgZGVhbHQgJHtkbWd9IGRtZyB0byBSZWN1cnNpb24sIFJlY3Vyc2lvbiBub3cgaGFzICR7Ym9zcy5ocH0gaHAhIGBcbiAgICApO1xuICAgIGJvZHkuYXBwZW5kKHRleHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICB9LCAyMDAwKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJtaXNzLXRleHRcIik7XG4gICAgdGV4dC5hcHBlbmQoXG4gICAgICBgWW91IG1pc3NlZCEgWW91IGRlYWx0IDAgZG1nIHRvIHRoZSBib3NzLCB0aGUgYm9zcyBub3cgaGFzICR7Ym9zcy5ocH0gaHAhIGBcbiAgICApO1xuICAgIGJvZHkuYXBwZW5kKHRleHQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuICBzZXRUaW1lb3V0KHJlc2V0UGxheWVyLCA3MDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBib3NzLmF0dGFjayhwbGF5ZXIpO1xuICAgIGJvc3NBdHRBdWRpby5wbGF5KCk7XG4gIH0sIDIwMDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==