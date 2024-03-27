import React from 'react';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div>
          <span className='logo'>Hello</span>
          <span className='logos'>Coco</span>
        </div>
        <div className='user'>
            <img src="data:image/jpeg;base64,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" alt="" />
            <span>Godson</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar