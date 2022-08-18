import sciseaux from '../../images/icon-scissors.svg';

import React from 'react';

const battleSciseaux = () => {
    return (
        <div  className='absolute  top-[15%]  p-14 bg-whiteC rounded-[50%] border-[1.8vw] border-ciseaux w-1/4 shadow-inner shadow-iconeC  text-center' >
            <img src={sciseaux} className="w-full " alt="" />
        </div>
    );
};

export default battleSciseaux;