import React from 'react'
import backArrow from "../../../assest/backarrow.svg"
import "./DetailHero.css"
import { useNavigate } from 'react-router-dom'
import shuffleIcon from "../../../assest/shuffleicon.svg"
import addToLibraryIcon from "../../../assest/addToLibraryIcon.svg"

export default function DetailHero({albumPage}) {
    const navigate = useNavigate();

    let totalAlbumDuration= (albumPage)=>{
        let totalAlbumDurationInMs=albumPage?.songs?.reduce((a,b)=>a+b.durationInMs,0)
        
        let totalAlbumDurationInHr= ((totalAlbumDurationInMs/60000)/60).toFixed(2)

        let extractHr = Math.floor(totalAlbumDurationInHr)

        let extractMin = Math.round((totalAlbumDurationInHr-extractHr)*60)

        return `${extractHr} hr ${extractMin} min`
    }
    
  return (
    <div className='detailhero-container'>
        <div className='back-btn' onClick={()=>navigate("/")}>
            <img src={backArrow} alt="backarrow-btn"/>
        </div>
        <div className='album-section'>
            <div className='album-image-section'>
                <img src={albumPage?.image} alt={albumPage?.title} className='album-image'/>
            </div>
            <div className='album-desc'>
                <div className='album-desc-title'>
                    <h3>{albumPage?.title}</h3>
                </div>
                <div className='album-description'>
                    <p>{albumPage?.description} #SpotifyWrapped</p>
                    <p>2023</p>
                </div>
                <div className='album-stats'>
                    <div className='total-album-songs'>{albumPage?.songs?.length} songs</div>
                    <div className='dot'>.</div>
                    <div className='total-album-duration'>{totalAlbumDuration(albumPage)}</div>
                    <div className='dot'>.</div>
                    <div className='total-album-follows'>{albumPage?.follows} Follows</div> 
                </div>
                <div className='album-btns'>
                    <div className='shuffle-btn'>
                        <img src={shuffleIcon} alt="shuffleIcon" className='shuffleIcon'/>
                        <p>Shuffle</p>
                    </div>
                    <div className='library-btn'>
                        <img src={addToLibraryIcon} alt="addToLibraryIcon" className='addToLibraryIcon'/>
                        <p>Add to library</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
