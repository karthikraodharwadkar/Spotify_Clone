import React, { useState } from 'react'
import "./Section.css"
import Card from '../Card/Card'
import CircularProgress from '@mui/material/CircularProgress'
import SwiperData from '../SwiperData/SwiperData'

export default function Section({title,data,setAlbumPage}) {

    const [toggle,setToggle]=useState(false)

    const handleToggle=()=>{
        setToggle(!toggle)
    }

  return (
    <div className='section-container'>
        <div className='section-header'>
            <h3 className='album-title'>{title}</h3>
            <h4 className='album-toggle' onClick={handleToggle}>{toggle===true?"Collapse":"Show all"}</h4>
        </div>
        {data.length===0 ? <div className='circularProgress'><CircularProgress/></div>: toggle===true ? (
        <div className='section-swiper'>
            {data.map((item,index)=>{
                return(
                    <div key={index}>
                        <Card data={item} setAlbumPage={setAlbumPage} follows="follows" />
                    </div>
                )
            })}
        </div>
        ):<SwiperData data={data} component={(data)=> <Card data={data} follows="follows" setAlbumPage={setAlbumPage} />}/>
        }
    </div>
  )
}
