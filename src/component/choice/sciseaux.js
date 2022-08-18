import sciseaux from '../../images/icon-scissors.svg';

import React from 'react';

const Sciseaux = (props) => {
    return (
        <div id="sciseaux" className='absolute  top-[8%] left-[58%] p-9 bg-whiteC rounded-[50%] border-[1.2vw] border-ciseaux w-1/3 shadow-inner shadow-iconeC cursor-pointer' onClick={(e)=>props.setChoix(e.target.id)}>
            <img  className='w-full pointer-events-none' src={sciseaux} alt="" />
        </div>
    );
};

export default Sciseaux;