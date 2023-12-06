import React from 'react'
import "./SearchBarCard.css"

export default function SearchBarCard({data,setSearchInputValue}) {
  return (
    <div className='searchBarCard-container' onClick={()=>setSearchInputValue(data.title)}>
        <div className='searchBar-left-section'>
            <div className='searchBar-album-image-section'>
                <img src={data.image} alt={data.title} className='searchBar-album-image'/>
            </div>
            <div className='searchBar-album-details'>
                <p className='searchBar-album-title'>{data.title}</p>
                <p className='searchBar-album-artist'>{}</p>
            </div>
        </div>
        <div className='searchBar-right-section'>
            <div className='searchBar-album-follows'>{data.follows} Follows</div>
        </div>
    </div>
  )
}
