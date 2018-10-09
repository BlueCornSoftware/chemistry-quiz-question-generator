"use strict";
exports.__esModule = true;
var randomBool = function (a, b) { return (0.5 > Math.random()) ? 1 : 0; };
exports["default"] = (function (array) {
    return array.sort(randomBool).reverse().sort(randomBool).sort(randomBool);
});
