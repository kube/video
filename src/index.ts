
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import Stream from './lib/Stream'
import MP4Player from './lib/MP4Player'

const video = require('../video/teads.mp4') as string
const videoStream = new Stream(video)
const player = new MP4Player(videoStream, true, true, true)
document.getElementById('video-container').appendChild(player.canvas)

player.play()
