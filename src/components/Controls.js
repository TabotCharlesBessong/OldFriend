import React from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined, PauseCircleFilledOutlined, PlayCircleFilledOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
// import './index.css'

const useStyles = makeStyles(theme =>({
  control:{
    marginBottom:'1.5rem',
    background:'#222',
    padding:'1.5rem 0.5rem',
    borderRadius:'0.6rem',
    '&:hover':{
      background:'#fff'
    }
  },
  controlSkip:{
    margin:'0 1rem',
    '&:hover':{
      background:'#222',
      color:'#fff'
    }
  }
  
  
}))
 
const Controls = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.control}>
      <button className={classes.controlSkip} onClick = {()=> props.skipSong(false)} >
        <ArrowBackIosOutlined />
      </button>
      <button className="play-control"  onClick = {()=> props.setIsPlaying(!props.isPlaying)} >
        {/* <PlayCircleFilledOutlined /> */}
        {props.isPlaying ? <PauseCircleFilledOutlined /> : <PlayCircleFilledOutlined /> }
      </button>
      <button className={classes.controlSkip} onClick={()=> props.skipSong(true)} >
    <ArrowForwardIosOutlined />
  </button>
    </div>
  )
}

export default Controls
