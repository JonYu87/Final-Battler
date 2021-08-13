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
    value: function attack() {
      this.x = 200;
      var hitChance = Math.round(Math.random() * 10);

      if (hitChance >= 3) {
        var dmg = Math.random(Math.random() * 10) + this.dmg;
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
    text.append("You dealt ".concat(dmg, " dmg to the boss, the boss now has ").concat(boss.hp, " hp! "));
    body.append(text);
    setTimeout(function () {
      text.remove();
    }, 2000);
  }

  setTimeout(resetPlayer, 700);
  setTimeout(function () {
    boss.attack();
    bossAttAudio.play();
  }, 2000);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL2Jvc3MuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy91dGlscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8xMWQ5Iiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJvc3MiLCJwcm9wcyIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJocCIsIm1wIiwiZG1nIiwicmVzZXQiLCJiaW5kIiwiaGl0Q2hhbmNlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwic2V0VGltZW91dCIsIlBsYXllciIsIndpbmRvdyIsImF0dGFjayIsInRvZ2dsZVBsYXkiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJvc3MiLCJwbGF5ZXIiLCJkZWFkRnJvZyIsImRlYWRUZXJyYSIsImJhdHRsZVRoZW1lIiwidm9sdW1lIiwicGF1c2VkIiwicGxheSIsInBhdXNlIiwiYm9zc1Nwcml0ZSIsIkltYWdlIiwic3JjIiwiYmFja2dyb3VuZCIsInBsYXllclNwcml0ZSIsImRlYWRTcHJpdGUxIiwiZGVhZFNwcml0ZTIiLCJhdHRhY2tBdWRpbyIsIkF1ZGlvIiwiYm9zc0F0dEF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlc2V0UGxheWVyIiwidGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSTtBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2hCLFNBQUtDLENBQUwsR0FBUyxHQUFWLEVBQ0csS0FBS0MsQ0FBTCxHQUFTLEdBRFosRUFFRyxLQUFLQyxLQUFMLEdBQWEsR0FGaEIsRUFHRyxLQUFLQyxNQUFMLEdBQWMsR0FIakIsRUFJRyxLQUFLQyxFQUFMLEdBQVUsSUFKYixFQUtHLEtBQUtDLEVBQUwsR0FBVSxJQUxiLEVBTUcsS0FBS0MsR0FBTCxHQUFXLEVBTmQ7QUFPQSxTQUFLQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQWI7QUFDRDs7OztXQUVELGlCQUFRO0FBQ04sV0FBS1IsQ0FBTCxHQUFTLEdBQVQ7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCxXQUFLQSxDQUFMLEdBQVMsR0FBVDtBQUNBLFVBQUlTLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUFoQjs7QUFDQSxVQUFJSCxTQUFTLElBQUksQ0FBakIsRUFBb0I7QUFDbEIsWUFBSUgsR0FBRyxHQUFHSSxJQUFJLENBQUNFLE1BQUwsQ0FBWUYsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTVCLElBQWtDLEtBQUtOLEdBQWpEO0FBQ0Q7O0FBQ0RPLGdCQUFVLENBQUMsS0FBS04sS0FBTixFQUFhLEdBQWIsQ0FBVjtBQUNEOzs7Ozs7QUFHSCxpRUFBZVQsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0lDMUJNZ0IsTSxHQUNKLGdCQUFZZixLQUFaLEVBQW1C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ZXNDb250ZW50IjpbImNsYXNzIEJvc3Mge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICh0aGlzLnggPSAxMDApLFxuICAgICAgKHRoaXMueSA9IDE1MCksXG4gICAgICAodGhpcy53aWR0aCA9IDI0MCksXG4gICAgICAodGhpcy5oZWlnaHQgPSAyNTYpLFxuICAgICAgKHRoaXMuaHAgPSAzMDAwKSxcbiAgICAgICh0aGlzLm1wID0gOTk5OSksXG4gICAgICAodGhpcy5kbWcgPSA1MCk7XG4gICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMueCA9IDEwMDtcbiAgfVxuXG4gIGF0dGFjaygpIHtcbiAgICB0aGlzLnggPSAyMDA7XG4gICAgbGV0IGhpdENoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBpZiAoaGl0Q2hhbmNlID49IDMpIHtcbiAgICAgIGxldCBkbWcgPSBNYXRoLnJhbmRvbShNYXRoLnJhbmRvbSgpICogMTApICsgdGhpcy5kbWc7XG4gICAgfVxuICAgIHNldFRpbWVvdXQodGhpcy5yZXNldCwgNzAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3NzO1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnggPSA3MDAsXG4gICAgdGhpcy55ID0gMjAwLFxuICAgIHRoaXMud2lkdGggPSA2MixcbiAgICB0aGlzLmhlaWdodCA9IDYyLFxuICAgIHRoaXMuaHAgPSA5OTksXG4gICAgdGhpcy5tcCA9IDk5OSxcbiAgICB0aGlzLmRtZyA9IDUwXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vdXRpbHMvcGxheWVyXCI7XG5pbXBvcnQgQm9zcyBmcm9tIFwiLi91dGlscy9ib3NzXCI7XG53aW5kb3cuYXR0YWNrID0gYXR0YWNrO1xud2luZG93LnRvZ2dsZVBsYXkgPSB0b2dnbGVQbGF5O1xuXG4vLyBjb25zdCBiYXR0bGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXR0bGVNZW51XCIpXG4vLyBjb25zdCBhdHRhY2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF0dGFja0J0bkNvbnRhaW5lclwiKVxuLy8gY29uc3QgYXR0YWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5Db250YWluZXJcIilcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZFwiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXMud2lkdGggPSA4MDA7XG5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG5jb25zdCBib3NzID0gbmV3IEJvc3MoKTtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuXG5jb25zdCBkZWFkRnJvZyA9IHtcbiAgeDogNzAwLFxuICB5OiAzMDAsXG4gIHdpZHRoOiA1MCxcbiAgaGVpZ2h0OiAyOCxcbn07XG5cbmNvbnN0IGRlYWRUZXJyYSA9IHtcbiAgeDogNzAwLFxuICB5OiAzODAsXG4gIHdpZHRoOiA0OCxcbiAgaGVpZ2h0OiAzMixcbn07XG5cbmxldCBiYXR0bGVUaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWUtbXVzaWNcIik7XG5iYXR0bGVUaGVtZS52b2x1bWUgPSAwLjE7XG5cbmZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gIHJldHVybiBiYXR0bGVUaGVtZS5wYXVzZWQgPyBiYXR0bGVUaGVtZS5wbGF5KCkgOiBiYXR0bGVUaGVtZS5wYXVzZSgpO1xufVxuXG5jb25zdCBib3NzU3ByaXRlID0gbmV3IEltYWdlKCk7XG5ib3NzU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MuZ2lmXCI7XG5cbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYmFja2dyb3VuZC5naWZcIjtcblxuY29uc3QgcGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvQ3Jvbm8uZ2lmXCI7XG5cbmNvbnN0IGRlYWRTcHJpdGUxID0gbmV3IEltYWdlKCk7XG5kZWFkU3ByaXRlMS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9Gcm9nLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMiA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTIuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvVGVycmEuZ2lmXCI7XG5cbmNvbnN0IGF0dGFja0F1ZGlvID0gbmV3IEF1ZGlvKCk7XG5hdHRhY2tBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9hdHRhY2subXAzXCI7XG5cbmNvbnN0IGJvc3NBdHRBdWRpbyA9IG5ldyBBdWRpbygpO1xuYm9zc0F0dEF1ZGlvLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2Jvc3MubXAzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguZHJhd0ltYWdlKGJvc3NTcHJpdGUsIGJvc3MueCwgYm9zcy55LCBib3NzLndpZHRoLCBib3NzLmhlaWdodCk7XG4gIGN0eC5kcmF3SW1hZ2UocGxheWVyU3ByaXRlLCBwbGF5ZXIueCwgcGxheWVyLnksIHBsYXllci53aWR0aCwgcGxheWVyLmhlaWdodCk7XG4gIGN0eC5kcmF3SW1hZ2UoXG4gICAgZGVhZFNwcml0ZTEsXG4gICAgZGVhZEZyb2cueCxcbiAgICBkZWFkRnJvZy55LFxuICAgIGRlYWRGcm9nLndpZHRoLFxuICAgIGRlYWRGcm9nLmhlaWdodFxuICApO1xuICBjdHguZHJhd0ltYWdlKFxuICAgIGRlYWRTcHJpdGUyLFxuICAgIGRlYWRUZXJyYS54LFxuICAgIGRlYWRUZXJyYS55LFxuICAgIGRlYWRUZXJyYS53aWR0aCxcbiAgICBkZWFkVGVycmEuaGVpZ2h0XG4gICk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cblxuYW5pbWF0ZSgpO1xufSk7XG5cbmZ1bmN0aW9uIHJlc2V0UGxheWVyKCkge1xuICBwbGF5ZXIueCA9IDcwMDtcbn1cbi8vYXR0YWNrXG5mdW5jdGlvbiBhdHRhY2soKSB7XG4gIHBsYXllci54ID0gNjAwO1xuICBhdHRhY2tBdWRpby5wbGF5KCk7XG4gIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGlmIChoaXRDaGFuY2UgPj0gNCkge1xuICAgIGxldCBkbWcgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCkgKyBwbGF5ZXIuZG1nO1xuICAgIC8vYXBwZW5kIGRpdj9cbiAgICBib3NzLmhwIC09IGRtZztcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJkbWctdGV4dFwiKTtcbiAgICB0ZXh0LmFwcGVuZChcbiAgICAgIGBZb3UgZGVhbHQgJHtkbWd9IGRtZyB0byB0aGUgYm9zcywgdGhlIGJvc3Mgbm93IGhhcyAke2Jvc3MuaHB9IGhwISBgXG4gICAgKTtcbiAgICBib2R5LmFwcGVuZCh0ZXh0KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRleHQucmVtb3ZlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgc2V0VGltZW91dChyZXNldFBsYXllciwgNzAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYm9zcy5hdHRhY2soKTtcbiAgICBib3NzQXR0QXVkaW8ucGxheSgpO1xuICB9LCAyMDAwKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=