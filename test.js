'use strict'

var test = require('tape')
var filter = require('./')
var almostEqual = require('almost-equal')

function almost (x, y) {
	if (x.length && y.length) return x.every(function (x, i) {
		return almost(x, y[i]);
	});

	var EPSILON = 10e-15;

	if (!almostEqual(x, y, EPSILON)) throw Error(`${x} ≈ ${y}`);

	return true;
};


test('leaky', t => {
	let leaky = filter.leaky({lambda: 0.95, y: 0})

	let data = leaky([0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0])

	t.ok(almost(data, [0, 0, 0, 0, 0.05, 0.0475, 0.045125, 0.04286875, 0.0407253125, 0.038689046875, 0.03675459453125]))

	t.end()
})
