# audio-filter [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

**WORK IN PROGRESS**, please get back after a while to not get disappointed.

Collection of digital filters, for audio & dsp applications.

## Usage

[![npm install audio-filter](https://nodei.co/npm/audio-filter.png?mini=true)](https://npmjs.org/package/audio-filter/)

Produce 1024 samples of [grey noise](https://en.wikipedia.org/wiki/Grey_noise):

```js
const WhiteNoise = require('audio-noise/white')
const LoudnessFilter = require('audio-filter/loudness')

//create noise generator
let noise = WhiteNoise()

//create filter instance
let filter = LoudnessFilter()

//generate frame of gray noise
let data = filter(noise(new Float32Array(1024)))
```

## API

Filters can be used separately as `require('audio-filter/<type>')` or as a bundle `require('audio-filter').<type>`. Every filter constructor creates a filtering function based on options. `options` may provide filter-specific parameters, usually numbers or functions for varying parameters.

```js
const createFilter = require('audio-filter/<some>')
let filter = createFilter(options)

let data = filter(samples)
```

Implemented filters:

* [x] leaky
* [ ] biquad
* [ ] loudness
* [ ] lowpass
* [ ] hipass
* [ ] rumble
* [ ] flutter
* [ ] noise
* [ ] bessel
* [ ] butterworth
* [ ] matched
* [ ] elliptical
* [ ] linkwitz-riley
* [ ] chebyshev
* [ ] savitzky-golay
* [ ] curve (custom f-curve)


## Filters

### leaky({lambda: 0.95, y: 0})

[Leaky integrator](https://en.wikipedia.org/wiki/Leaky_integrator).

<!--
### loudness

Implemented filter types:

* `a` — [A-weighting](https://en.wikipedia.org/wiki/A-weighting)
* `b` — B-weighting
* `c` — C-weighting
* `d` — D-weighting
* `z` — Z-weighting (zero weighting)
* `itu` — [ITU-R 468 weighting](https://en.wikipedia.org/wiki/ITU-R_468_noise_weighting)

-->

## See also

* [a-weighting](https://github.com/audiojs/a-weighting) — collection of frequency weighting curves.
