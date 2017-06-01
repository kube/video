Teads Video Test
================

This repository contains a port of [Broadway](https://github.com/mbebenita/Broadway) to TypeScript and ES Modules.

### Development
```sh
yarn start
```

### Build
```sh
yarn build
```

You need to store an H.264 encoded MP4 file in `video/teads.mp4` without weighted-prediction P-frames nor CABAC entropy. For much info about this, check [Broadway README](https://github.com/mbebenita/Broadway#encoding-video).
