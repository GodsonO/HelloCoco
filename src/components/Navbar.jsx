import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='Navbar'>
        <div>
          <span className='logo'>Hello</span>
          <span className='logos'>Coco</span>
        </div>
        <div className='user'>
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar