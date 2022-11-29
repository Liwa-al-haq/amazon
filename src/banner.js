import React from 'react';
import ban from './img/banner.jpg'

const Banner = () => {
    return (
        <div className='flex justify-center align-middle'>
            <img src={ban} className="flex justify-center w-screen align-middle  bg-red-400 overflow-autoscrollbar-hide " alt='' ></img>
        </div>
    );
};

export default Banner;