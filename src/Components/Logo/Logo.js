import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Yope from './yope.jpg';

const Logo = () => {

    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
             <div className="Tilt-inner pa3"> 
             <img style={{}} alt='logo' src={Yope}/> </div>
            </Tilt>
        </div>

);


}

export default Logo;