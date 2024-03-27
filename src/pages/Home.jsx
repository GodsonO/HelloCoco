import React from 'react';
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className='HomeContainer'>
            <div className="Container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}

export default Home;