
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import Stream from './Stream'
import MP4Player from './MP4Player'

const video = require('../video/teads.mp4') as string
const container = document.getElementById('video-container') as HTMLDivElement
const player = new MP4Player(new Stream(video), true, true, true)
container.appendChild(player.canvas)

player.play()
