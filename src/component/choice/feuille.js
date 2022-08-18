import feuille from '../../images/icon-paper.svg';

import React from 'react';

const Feuille = (props) => {
    return (
        <div id="feuille" className='absolute top-[8%] left-[12%] p-9 bg-whiteC rounded-[50%] border-[1.2vw] border-feuille w-1/3 shadow-inner shadow-iconeF  cursor-pointer ' onClick={(e)=>props.setChoix(e.target.id)}>
            <img  className='w-full pointer-events-none' src={feuille} alt="" />
        </div>
    );
};

export default Feuille;