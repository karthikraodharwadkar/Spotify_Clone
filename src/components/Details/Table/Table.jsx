import React from 'react'
import "./Table.css"
import Pagination from '../Pagination/Pagination'

export default function Table({albumPage,itemsPerPage,startIndex,endIndex,currentPage,setCurrentPage,totalPages,setCurrentAudioTracker}) {

  return (
    <>
    <div className='pagination-container'>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} totalPages={totalPages}/>
    </div>
    <div className='table-container'>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {albumPage.songs.slice(startIndex,endIndex).map((item,index)=>{
                    return(
                        <tr key={index} onClick={()=>setCurrentAudioTracker(item)}>
                            <td><div className='table-album-container'>
                                    <img src={item.image} alt={item.title} className='table-album-image' />
                                    <p className='table-album-name'>{item.title}</p>
                                </div></td>
                            <td>{item.artists}</td>
                            <td>{(item.durationInMs/1000).toFixed(2)} sec</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    </>
  )
}
