// @flow
'use strict'

var test = require('tape')
var rgba = require('./rgba-color')

test('outputs initial alpha value', function (t) {
  var color = rgba(255, 255, 255, 0.4)
  var expected = 'rgba(255,255,255,0.4)'
  var actual = color()
  t.equal(expected, actual)
  t.end()
})

test('outputs new alpha value', function (t) {
  var color = rgba(0, 0, 0, 0.5)
  var expected = 'rgba(0,0,0,0.2)'
  var actual = color(0.2)
  t.equal(expected, actual)
  t.end()
})

test('outputs white', function (t) {
  var color = rgba(255, 255, 255, 1)
  var expected = 'rgba(255,255,255,1)'
  var actual = color(1)
  t.equal(expected, actual)
  t.end()
})
