'use strict'

function rgba(red, green, blue, alpha) {
  return function (newAlpha) {
    var finalAlpha = newAlpha !== undefined ? newAlpha : alpha
    return 'rgba(' + red + ',' + green + ',' + blue + ',' + finalAlpha + ')'
  }
}

module.exports = rgba
