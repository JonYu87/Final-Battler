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
window.togglePlay = togglePlay; // const battleMenu = document.getElementById("battleMenu")
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
var battleTheme = document.getElementById("theme-music");
battleTheme.volume = 0.1;

function togglePlay() {
  return battleTheme.paused ? battleTheme.play() : battleTheme.pause();
}

function togglePlaySecond() {
  return battleTheme.paused ? battleTheme.play() : battleTheme.pause();
}

function togglePlayThird() {
  return battleTheme.paused ? battleTheme.play() : battleTheme.pause();
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
document.addEventListener('DOMContentLoaded', function (event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL2Jvc3MuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy91dGlscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCb3NzIiwicHJvcHMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaHAiLCJtcCIsImRtZyIsInJlc2V0IiwiYmluZCIsInBsYXllciIsImhpdENoYW5jZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInRleHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJQbGF5ZXIiLCJ3aW5kb3ciLCJhdHRhY2siLCJ0b2dnbGVQbGF5IiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiYm9zcyIsImRlYWRGcm9nIiwiZGVhZFRlcnJhIiwiYmF0dGxlVGhlbWUiLCJ2b2x1bWUiLCJwYXVzZWQiLCJwbGF5IiwicGF1c2UiLCJ0b2dnbGVQbGF5U2Vjb25kIiwidG9nZ2xlUGxheVRoaXJkIiwiYm9zc1Nwcml0ZSIsIkltYWdlIiwic3JjIiwiYmFja2dyb3VuZCIsInBsYXllclNwcml0ZSIsImRlYWRTcHJpdGUxIiwiZGVhZFNwcml0ZTIiLCJhdHRhY2tBdWRpbyIsIkF1ZGlvIiwiYm9zc0F0dEF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc2V0UGxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2hCLFNBQUtDLENBQUwsR0FBUyxHQUFWLEVBQ0csS0FBS0MsQ0FBTCxHQUFTLEdBRFosRUFFRyxLQUFLQyxLQUFMLEdBQWEsR0FGaEIsRUFHRyxLQUFLQyxNQUFMLEdBQWMsR0FIakIsRUFJRyxLQUFLQyxFQUFMLEdBQVUsSUFKYixFQUtHLEtBQUtDLEVBQUwsR0FBVSxJQUxiLEVBTUcsS0FBS0MsR0FBTCxHQUFXLEVBTmQ7QUFPQSxTQUFLQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQWI7QUFDRDs7OztXQUVELGlCQUFRO0FBQ04sV0FBS1IsQ0FBTCxHQUFTLEdBQVQ7QUFDRDs7O1dBRUQsZ0JBQU9TLE1BQVAsRUFBZTtBQUNiLFdBQUtULENBQUwsR0FBUyxHQUFUO0FBQ0EsVUFBSVUsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBQWhCOztBQUNBLFVBQUlILFNBQVMsSUFBSSxDQUFqQixFQUFvQjtBQUNsQixZQUFJSixHQUFHLEdBQUdLLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsSUFBaUMsS0FBS1AsR0FBaEQ7QUFDQUcsY0FBTSxDQUFDTCxFQUFQLElBQWFFLEdBQWI7QUFDQSxZQUFJUSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1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OztBQUNBSixTQUFJLENBQUNLLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjs7QUFDQU4sU0FBSSxDQUFDTyxNQUFMLHFFQUMrRFcsSUFBSSxDQUFDNUIsRUFEcEU7O0FBR0FhLFNBQUksQ0FBQ0ksTUFBTCxDQUFZUCxLQUFaOztBQUNBUSxjQUFVLENBQUMsWUFBTTtBQUNmUixXQUFJLENBQUNTLE1BQUw7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBQ0RELFlBQVUsQ0FBQ29DLFdBQUQsRUFBYyxHQUFkLENBQVY7QUFDQXBDLFlBQVUsQ0FBQyxZQUFNO0FBQ2ZVLFFBQUksQ0FBQ04sTUFBTCxDQUFZakIsTUFBWjtBQUNBMEMsZ0JBQVksQ0FBQ2IsSUFBYjtBQUNELEdBSFMsRUFHUCxJQUhPLENBQVY7QUFJRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jbGFzcyBCb3NzIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAodGhpcy54ID0gMTAwKSxcbiAgICAgICh0aGlzLnkgPSAxNTApLFxuICAgICAgKHRoaXMud2lkdGggPSAyNDApLFxuICAgICAgKHRoaXMuaGVpZ2h0ID0gMjU2KSxcbiAgICAgICh0aGlzLmhwID0gMzAwMCksXG4gICAgICAodGhpcy5tcCA9IDk5OTkpLFxuICAgICAgKHRoaXMuZG1nID0gNTApO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnggPSAxMDA7XG4gIH1cblxuICBhdHRhY2socGxheWVyKSB7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaWYgKGhpdENoYW5jZSA+PSAzKSB7XG4gICAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgdGhpcy5kbWc7XG4gICAgICBwbGF5ZXIuaHAgLT0gZG1nO1xuICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcImJvc3MtZG1nLXRleHRcIik7XG4gICAgICB0ZXh0LmFwcGVuZChcbiAgICAgICAgYFJlY3Vyc2lvbiBkZWFsdCAke2RtZ30gdG8geW91LCB5b3UgaGF2ZSAke3BsYXllci5ocH0gaHAgcmVtYWluaW5nIWBcbiAgICAgICk7XG4gICAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJib3NzLW1pc3MtdGV4dFwiKTtcbiAgICAgIHRleHQuYXBwZW5kKFxuICAgICAgICBgUmVjdXJzaW9uIG1pc3NlZCEgWW91IGhhdmUgJHtwbGF5ZXIuaHB9IGhwIHJlbWFpbmluZyFgXG4gICAgICApO1xuICAgICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGV4dC5yZW1vdmUoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVzZXQsIDcwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9zcztcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy54ID0gNzAwLFxuICAgIHRoaXMueSA9IDIwMCxcbiAgICB0aGlzLndpZHRoID0gNjIsXG4gICAgdGhpcy5oZWlnaHQgPSA2MixcbiAgICB0aGlzLmhwID0gOTk5LFxuICAgIHRoaXMubXAgPSA5OTksXG4gICAgdGhpcy5kbWcgPSA1MFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3V0aWxzL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vdXRpbHMvYm9zc1wiO1xud2luZG93LmF0dGFjayA9IGF0dGFjaztcbndpbmRvdy50b2dnbGVQbGF5ID0gdG9nZ2xlUGxheTtcblxuLy8gY29uc3QgYmF0dGxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmF0dGxlTWVudVwiKVxuLy8gY29uc3QgYXR0YWNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5Db250YWluZXJcIilcbi8vIGNvbnN0IGF0dGFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuQ29udGFpbmVyXCIpXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGRcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDYwMDtcblxuY29uc3QgYm9zcyA9IG5ldyBCb3NzKCk7XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcblxuY29uc3QgZGVhZEZyb2cgPSB7XG4gIHg6IDcwMCxcbiAgeTogMzAwLFxuICB3aWR0aDogNTAsXG4gIGhlaWdodDogMjgsXG59O1xuXG5jb25zdCBkZWFkVGVycmEgPSB7XG4gIHg6IDcwMCxcbiAgeTogMzgwLFxuICB3aWR0aDogNDgsXG4gIGhlaWdodDogMzIsXG59O1xuXG5sZXQgYmF0dGxlVGhlbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljXCIpO1xuYmF0dGxlVGhlbWUudm9sdW1lID0gMC4xO1xuXG5mdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICByZXR1cm4gYmF0dGxlVGhlbWUucGF1c2VkID8gYmF0dGxlVGhlbWUucGxheSgpIDogYmF0dGxlVGhlbWUucGF1c2UoKTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZVBsYXlTZWNvbmQoKSB7XG4gIHJldHVybiBiYXR0bGVUaGVtZS5wYXVzZWQgPyBiYXR0bGVUaGVtZS5wbGF5KCkgOiBiYXR0bGVUaGVtZS5wYXVzZSgpO1xufVxuZnVuY3Rpb24gdG9nZ2xlUGxheVRoaXJkKCkge1xuICByZXR1cm4gYmF0dGxlVGhlbWUucGF1c2VkID8gYmF0dGxlVGhlbWUucGxheSgpIDogYmF0dGxlVGhlbWUucGF1c2UoKTtcbn1cblxuY29uc3QgYm9zc1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xuYm9zc1Nwcml0ZS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLmdpZlwiO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2JhY2tncm91bmQuZ2lmXCI7XG5cbmNvbnN0IHBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL0Nyb25vLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMSA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTEuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvRnJvZy5naWZcIjtcblxuY29uc3QgZGVhZFNwcml0ZTIgPSBuZXcgSW1hZ2UoKTtcbmRlYWRTcHJpdGUyLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL1RlcnJhLmdpZlwiO1xuXG5jb25zdCBhdHRhY2tBdWRpbyA9IG5ldyBBdWRpbygpO1xuYXR0YWNrQXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYXR0YWNrLm1wM1wiO1xuXG5jb25zdCBib3NzQXR0QXVkaW8gPSBuZXcgQXVkaW8oKTtcbmJvc3NBdHRBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLm1wM1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmRyYXdJbWFnZShib3NzU3ByaXRlLCBib3NzLngsIGJvc3MueSwgYm9zcy53aWR0aCwgYm9zcy5oZWlnaHQpO1xuICBjdHguZHJhd0ltYWdlKHBsYXllclNwcml0ZSwgcGxheWVyLngsIHBsYXllci55LCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQpO1xuICBjdHguZHJhd0ltYWdlKFxuICAgIGRlYWRTcHJpdGUxLFxuICAgIGRlYWRGcm9nLngsXG4gICAgZGVhZEZyb2cueSxcbiAgICBkZWFkRnJvZy53aWR0aCxcbiAgICBkZWFkRnJvZy5oZWlnaHRcbiAgKTtcbiAgY3R4LmRyYXdJbWFnZShcbiAgICBkZWFkU3ByaXRlMixcbiAgICBkZWFkVGVycmEueCxcbiAgICBkZWFkVGVycmEueSxcbiAgICBkZWFkVGVycmEud2lkdGgsXG4gICAgZGVhZFRlcnJhLmhlaWdodFxuICApO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5cbmFuaW1hdGUoKTtcbn0pO1xuXG5mdW5jdGlvbiByZXNldFBsYXllcigpIHtcbiAgcGxheWVyLnggPSA3MDA7XG59XG4vL2F0dGFja1xuZnVuY3Rpb24gYXR0YWNrKCkge1xuICBwbGF5ZXIueCA9IDYwMDtcbiAgYXR0YWNrQXVkaW8ucGxheSgpO1xuICBsZXQgaGl0Q2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICBpZiAoaGl0Q2hhbmNlID49IDQpIHtcbiAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgcGxheWVyLmRtZztcbiAgICAvL2FwcGVuZCBkaXY/XG4gICAgYm9zcy5ocCAtPSBkbWc7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZG1nLXRleHRcIik7XG4gICAgdGV4dC5hcHBlbmQoXG4gICAgICBgWW91IGRlYWx0ICR7ZG1nfSBkbWcgdG8gUmVjdXJzaW9uLCBSZWN1cnNpb24gbm93IGhhcyAke2Jvc3MuaHB9IGhwISBgXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwibWlzcy10ZXh0XCIpO1xuICAgIHRleHQuYXBwZW5kKFxuICAgICAgYFlvdSBtaXNzZWQhIFlvdSBkZWFsdCAwIGRtZyB0byB0aGUgYm9zcywgdGhlIGJvc3Mgbm93IGhhcyAke2Jvc3MuaHB9IGhwISBgXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgc2V0VGltZW91dChyZXNldFBsYXllciwgNzAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYm9zcy5hdHRhY2socGxheWVyKTtcbiAgICBib3NzQXR0QXVkaW8ucGxheSgpO1xuICB9LCAyMDAwKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=