import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'

const RightSidebar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>Ramesh Pawan<img src={assets.green_dot} className='dot' alt=''/></h3>
        <p>Hey, I like you so mush  </p>
      </div>    
    </div>
  )
}

export default RightSidebar