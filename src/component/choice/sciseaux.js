import sciseaux from '../../images/icon-scissors.svg';

import React from 'react';

const Sciseaux = (props) => {
    return (
        <div id="sciseaux" className='w-[22%] absolute top-[12vh] left-[60vw] md:left-[20vw] lg:p-9 p-5 bg-whiteC rounded-[50%] lg:border-[1.2vw] border-[2.5vw] border-ciseaux lg:w-1/3 shadow-inner shadow-iconeC cursor-pointer' onClick={(e)=>props.setChoix(e.target.id)}>
            <img  className='w-full pointer-events-none' src={sciseaux} alt="" />
        </div>
    );
};

export default Sciseaux;