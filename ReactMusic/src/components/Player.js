import React, { useEffect, useRef, useState } from 'react'
import Controls from './Controls'
import Details from './Details'
// import './index.css'
 
// import Audio from './Audio'

const Player = (props) => {
  const audioEl = useRef(null)
  const [isPlaying,setIsPlaying] = useState(false)

  useEffect(()=>{
    if(isPlaying){
      audioEl.current.play()
    }else{
      audioEl.current.pause( )
    }
  })
  const skipSong = (forward = true)=>{
    if(forward){
      props.setIndex(()=>{
        let temp = props.index
        temp++
        if(temp > props.songs.length - 1){
          temp = 0
        }
        return temp
      })
    }else{
      props.setIndex(()=>{
        let temp = props.index
        temp--
        if(temp <= 0){
          temp = props.songs.length - 1
        }
        return temp
      })
    }
  }
  return (
    <div className='player' >
      <h4>
        Playing now
      </h4>
      <Details
      song = {props.songs[props.index]}
      />
      <Controls
      isPlaying = {isPlaying}
      setIsPlaying = {setIsPlaying}
      skipSong  = {skipSong}
       />
    <audio 
    className='player-audio' 
    src={props.songs[props.index].src}
    ref={audioEl}
    controls 
    >

    </audio>
    <p>
      Next Up : { " " }
      <span>
        {props.songs[props.nextIndex].title} by {" "}
        {props.songs[props.nextIndex].artist}
      </span>
    </p>
    </div>
  )
}

export default Player
