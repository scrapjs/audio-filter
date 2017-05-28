/**
 * Simple leaky integrator
 *
 * @module  audio-filter/leaky
 */
'use strict'

module.exports = function Leaky(options) {
	if (!options) options = {}

	if (options.lambda == null) options.lambda = .95
	if (options.y == null) options.y = 0

	if (typeof λ === 'function') {

	}

	return filterArray

	function filterArray(src, λ=options.lambda, y=options.y) {
		console.log(λ)
		for (let i = 0, l = src.length; i < l; i++) {
			y = λ * y + (1 - λ) * src[i]
			src[i] = y
		}

		options.y = y

		return src
	}
}
