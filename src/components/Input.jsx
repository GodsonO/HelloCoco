import React from 'react'
import image from '../images/img.png'
import pin from '../images/attach.png'
import Send from '../images/sen.png'

const Input = () => {
  return (
    <div className='Input'>
        <input type="text" placeholder='Type someething....'/>
        <div className='Send'>
            <img src={pin} alt="" />
            <input type="file" style={{display:"none"}} id='file'/>
            <label htmlFor='file'>
                <img src={image} alt="" />
            </label>
            <a href="#" className="image-button">
                <img src={Send} alt="Button" />
            </a>

        </div>
    </div>
  )
}

export default Input