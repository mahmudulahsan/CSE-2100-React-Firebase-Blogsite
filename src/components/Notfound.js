import React from 'react'
import notfound from './404.png'

const Notfound = () => {
  return (
    <div className='d-flex justify-content-center mt-5'>
        <img src={notfound} alt="" style={{width: "500px", height:"auto"}}/>
    </div>
    
  )
}

export default Notfound