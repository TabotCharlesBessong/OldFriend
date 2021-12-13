import { classExpression } from '@babel/types'
import { Height } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
// import './index.css'

const useStyles  = makeStyles(theme =>({
  img:{
    maxWidth:'80%',
    width:'400px',
    Height:'500px',
    
  },
  details:{
    color:'#fff',
  }
}))

const Details = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.details}>
      <div className="details-img">
        <img className={classes.img} src={props.song.img} alt="" />
      </div> 
      <h3 className="details-title">
        {props.song.title}
      </h3>
      <h3 className="details-artist">
      {props.song.artist}
      </h3>
    </div>
  )
}

export default Details
