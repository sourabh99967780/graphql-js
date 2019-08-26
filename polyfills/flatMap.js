"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-redeclare */
// $FlowFixMe
var flatMap = Array.prototype.flatMap ? function (list, fn) {
  // $FlowFixMe
  return Array.prototype.flatMap.call(list, fn);
} : function (list, fn) {
  var result = [];

  for (var _i2 = 0; _i2 < list.length; _i2++) {
    var _item = list[_i2];
    var value = fn(_item);

    if (Array.isArray(value)) {
      result = result.concat(value);
    } else {
      result.push(value);
    }
  }

  return result;
};
var _default = flatMap;
exports.default = _default;