import React from 'react';
import cam from '../images/cam.png';
import add from '../images/add.png';
import more from '../images/more.png';
import Messages from './Messages';
import Input from './Input'

const Chat = () =>{
  return (
    <div className='Chat'>
      <div className='ChatInfo'>
        <span>daddy</span>
        <div className='ChatIcons'>
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat