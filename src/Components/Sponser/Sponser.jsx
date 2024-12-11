import React from 'react'
import "./Sponser.css"

const Sponser = () => {
    const Images = [
         '/public/Utills/Images/mockend.svg',
         '/public/Utills/Images/zuplo.png'
    ]
  return (
    <div className='sponser-section'>
        <h1>Sponsors</h1>
        <p>JSONPlaceholder is supported by the following companies and Sponsors on GitHub, check them out 💖</p>
        {
            Images.map((item,index)=>(
                 
                <img key={index} src={item} alt={`Sponsor ${index + 1}`} className="sponsor-logo" />
                 
            ))
        }

    </div>
  )
}

export default Sponser