import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

const ImageList = (props) => {
    const images= props.images.map(image=>{
        return(
            <ImageCard key={image.id} image={image}/>
        )
    })
  return (
    <div className='imageList'>
        {props.images.length>1 ? <>{images}</>: <div>No images found to show</div>}
    </div>
  )
}

export default ImageList