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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyLy4vc3JjL3V0aWxzL2Jvc3MuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy91dGlscy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpbmFsX2JhdHRsZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maW5hbF9iYXR0bGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmluYWxfYmF0dGxlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCb3NzIiwicHJvcHMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaHAiLCJtcCIsImRtZyIsInJlc2V0IiwiYmluZCIsImhpdENoYW5jZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInNldFRpbWVvdXQiLCJQbGF5ZXIiLCJ3aW5kb3ciLCJhdHRhY2siLCJ0b2dnbGVQbGF5IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJib3NzIiwicGxheWVyIiwiZGVhZEZyb2ciLCJkZWFkVGVycmEiLCJiYXR0bGVUaGVtZSIsInZvbHVtZSIsInBhdXNlZCIsInBsYXkiLCJwYXVzZSIsImJvc3NTcHJpdGUiLCJJbWFnZSIsInNyYyIsImJhY2tncm91bmQiLCJwbGF5ZXJTcHJpdGUiLCJkZWFkU3ByaXRlMSIsImRlYWRTcHJpdGUyIiwiYXR0YWNrQXVkaW8iLCJBdWRpbyIsImJvc3NBdHRBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJkcmF3SW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXNldFBsYXllciIsInRleHQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLEk7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNoQixTQUFLQyxDQUFMLEdBQVMsR0FBVixFQUNHLEtBQUtDLENBQUwsR0FBUyxHQURaLEVBRUcsS0FBS0MsS0FBTCxHQUFhLEdBRmhCLEVBR0csS0FBS0MsTUFBTCxHQUFjLEdBSGpCLEVBSUcsS0FBS0MsRUFBTCxHQUFVLElBSmIsRUFLRyxLQUFLQyxFQUFMLEdBQVUsSUFMYixFQU1HLEtBQUtDLEdBQUwsR0FBVyxFQU5kO0FBT0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0Q7Ozs7V0FFRCxpQkFBUTtBQUNOLFdBQUtSLENBQUwsR0FBUyxHQUFUO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsV0FBS0EsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxVQUFJUyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBaEI7O0FBQ0EsVUFBSUgsU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ2xCLFlBQUlILEdBQUcsR0FBR0ksSUFBSSxDQUFDRSxNQUFMLENBQVlGLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUE1QixJQUFrQyxLQUFLTixHQUFqRDtBQUNEOztBQUNETyxnQkFBVSxDQUFDLEtBQUtOLEtBQU4sRUFBYSxHQUFiLENBQVY7QUFDRDs7Ozs7O0FBR0gsaUVBQWVULElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztJQzFCTWdCLE0sR0FDSixnQkFBWWYsS0FBWixFQUFtQjtBQUFB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dGVudCI6WyJjbGFzcyBCb3NzIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAodGhpcy54ID0gMTAwKSxcbiAgICAgICh0aGlzLnkgPSAxNTApLFxuICAgICAgKHRoaXMud2lkdGggPSAyNDApLFxuICAgICAgKHRoaXMuaGVpZ2h0ID0gMjU2KSxcbiAgICAgICh0aGlzLmhwID0gMzAwMCksXG4gICAgICAodGhpcy5tcCA9IDk5OTkpLFxuICAgICAgKHRoaXMuZG1nID0gNTApO1xuICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnggPSAxMDA7XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIGxldCBoaXRDaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaWYgKGhpdENoYW5jZSA+PSAzKSB7XG4gICAgICBsZXQgZG1nID0gTWF0aC5yYW5kb20oTWF0aC5yYW5kb20oKSAqIDEwKSArIHRoaXMuZG1nO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVzZXQsIDcwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9zcztcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy54ID0gNzAwLFxuICAgIHRoaXMueSA9IDIwMCxcbiAgICB0aGlzLndpZHRoID0gNjIsXG4gICAgdGhpcy5oZWlnaHQgPSA2MixcbiAgICB0aGlzLmhwID0gOTk5LFxuICAgIHRoaXMubXAgPSA5OTksXG4gICAgdGhpcy5kbWcgPSA1MFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3V0aWxzL3BsYXllclwiO1xuaW1wb3J0IEJvc3MgZnJvbSBcIi4vdXRpbHMvYm9zc1wiO1xud2luZG93LmF0dGFjayA9IGF0dGFjaztcbndpbmRvdy50b2dnbGVQbGF5ID0gdG9nZ2xlUGxheTtcblxuLy8gY29uc3QgYmF0dGxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmF0dGxlTWVudVwiKVxuLy8gY29uc3QgYXR0YWNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tCdG5Db250YWluZXJcIilcbi8vIGNvbnN0IGF0dGFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrQnRuQ29udGFpbmVyXCIpXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGRcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzLndpZHRoID0gODAwO1xuY2FudmFzLmhlaWdodCA9IDYwMDtcblxuY29uc3QgYm9zcyA9IG5ldyBCb3NzKCk7XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcblxuY29uc3QgZGVhZEZyb2cgPSB7XG4gIHg6IDcwMCxcbiAgeTogMzAwLFxuICB3aWR0aDogNTAsXG4gIGhlaWdodDogMjgsXG59O1xuXG5jb25zdCBkZWFkVGVycmEgPSB7XG4gIHg6IDcwMCxcbiAgeTogMzgwLFxuICB3aWR0aDogNDgsXG4gIGhlaWdodDogMzIsXG59O1xuXG5sZXQgYmF0dGxlVGhlbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLW11c2ljXCIpO1xuYmF0dGxlVGhlbWUudm9sdW1lID0gMC4xO1xuXG5mdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xuICByZXR1cm4gYmF0dGxlVGhlbWUucGF1c2VkID8gYmF0dGxlVGhlbWUucGxheSgpIDogYmF0dGxlVGhlbWUucGF1c2UoKTtcbn1cblxuY29uc3QgYm9zc1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xuYm9zc1Nwcml0ZS5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLmdpZlwiO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL2JhY2tncm91bmQuZ2lmXCI7XG5cbmNvbnN0IHBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xucGxheWVyU3ByaXRlLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL0Nyb25vLmdpZlwiO1xuXG5jb25zdCBkZWFkU3ByaXRlMSA9IG5ldyBJbWFnZSgpO1xuZGVhZFNwcml0ZTEuc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvRnJvZy5naWZcIjtcblxuY29uc3QgZGVhZFNwcml0ZTIgPSBuZXcgSW1hZ2UoKTtcbmRlYWRTcHJpdGUyLnNyYyA9IFwiLi9zcmMvdXRpbHMvYXNzZXRzL1RlcnJhLmdpZlwiO1xuXG5jb25zdCBhdHRhY2tBdWRpbyA9IG5ldyBBdWRpbygpO1xuYXR0YWNrQXVkaW8uc3JjID0gXCIuL3NyYy91dGlscy9hc3NldHMvYXR0YWNrLm1wM1wiO1xuXG5jb25zdCBib3NzQXR0QXVkaW8gPSBuZXcgQXVkaW8oKTtcbmJvc3NBdHRBdWRpby5zcmMgPSBcIi4vc3JjL3V0aWxzL2Fzc2V0cy9ib3NzLm1wM1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmRyYXdJbWFnZShib3NzU3ByaXRlLCBib3NzLngsIGJvc3MueSwgYm9zcy53aWR0aCwgYm9zcy5oZWlnaHQpO1xuICBjdHguZHJhd0ltYWdlKHBsYXllclNwcml0ZSwgcGxheWVyLngsIHBsYXllci55LCBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQpO1xuICBjdHguZHJhd0ltYWdlKFxuICAgIGRlYWRTcHJpdGUxLFxuICAgIGRlYWRGcm9nLngsXG4gICAgZGVhZEZyb2cueSxcbiAgICBkZWFkRnJvZy53aWR0aCxcbiAgICBkZWFkRnJvZy5oZWlnaHRcbiAgKTtcbiAgY3R4LmRyYXdJbWFnZShcbiAgICBkZWFkU3ByaXRlMixcbiAgICBkZWFkVGVycmEueCxcbiAgICBkZWFkVGVycmEueSxcbiAgICBkZWFkVGVycmEud2lkdGgsXG4gICAgZGVhZFRlcnJhLmhlaWdodFxuICApO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5cbmFuaW1hdGUoKTtcbn0pO1xuXG5mdW5jdGlvbiByZXNldFBsYXllcigpIHtcbiAgcGxheWVyLnggPSA3MDA7XG59XG4vL2F0dGFja1xuZnVuY3Rpb24gYXR0YWNrKCkge1xuICBwbGF5ZXIueCA9IDYwMDtcbiAgYXR0YWNrQXVkaW8ucGxheSgpO1xuICBsZXQgaGl0Q2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApO1xuICBpZiAoaGl0Q2hhbmNlID49IDQpIHtcbiAgICBsZXQgZG1nID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApICsgcGxheWVyLmRtZztcbiAgICAvL2FwcGVuZCBkaXY/XG4gICAgYm9zcy5ocCAtPSBkbWc7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwiZG1nLXRleHRcIik7XG4gICAgdGV4dC5hcHBlbmQoXG4gICAgICBgWW91IGRlYWx0ICR7ZG1nfSBkbWcgdG8gdGhlIGJvc3MsIHRoZSBib3NzIG5vdyBoYXMgJHtib3NzLmhwfSBocCEgYFxuICAgICk7XG4gICAgYm9keS5hcHBlbmQodGV4dCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0ZXh0LnJlbW92ZSgpO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIHNldFRpbWVvdXQocmVzZXRQbGF5ZXIsIDcwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvc3MuYXR0YWNrKCk7XG4gICAgYm9zc0F0dEF1ZGlvLnBsYXkoKTtcbiAgfSwgMjAwMCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9