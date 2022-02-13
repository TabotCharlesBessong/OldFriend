import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Player from './components/Player';
// import './index.css'

const useStyles = makeStyles(theme =>({
    app:{
        display:'flex',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        background:'#222',
        textTransform:'capitalize',
        // width:'80%'
    }
}))

function App() {
    const classes = useStyles()
    const [songs,setSongs] = useState([
        {
            title:'breathin',
            artist:'Ariana Grande',
            img:'images/Ariana.jpg',
            src:"Music/Ariana_Grande_-_breathin'.mp3"
        },
        { 
            title:'trahison',
            artist:'Lady Ponce',
            img:'images/LadyPonce (1).jpg',
            src:'Music/_trahison(48k).mp3'

        },
        {
            title:'temoignage',
            artist:'Lady Ponce',
            img:'images/ladyPonce (2).jpg',
            src:'Music/Témoignage_confession_-_Lady_Ponce(256k).mp3'
        }
    ])
    const [index,setIndex] = useState(0)
    const [nextIndex,setNextIndex] = useState(1)

    useEffect(()=>{
        setNextIndex(()=>{
            if(index + 1 > songs.length - 1){
                return 0
            }else{
                return index + 1 
            }
        })
    },[index, songs.length])

    return (
        <>
        <div className={classes.app}>
            <Player
            index={index}
            setIndex={setIndex}
            nextIndex={nextIndex}
            songs={songs}
            />
        </div>
        
        </>
    )
}

export default App
