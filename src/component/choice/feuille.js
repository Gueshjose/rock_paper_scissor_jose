import feuille from '../../images/icon-paper.svg';

import React from 'react';

const Feuille = (props) => {
    return (
        <div id="feuille" className='w-[22%] absolute top-[12vh] left-[2vw] lg:p-9 p-5 bg-whiteC rounded-[50%] lg:border-[1.2vw] border-[2.5vw] border-feuille lg:w-1/3 shadow-inner shadow-iconeF  cursor-pointer ' onClick={(e)=>props.setChoix(e.target.id)}>
            <img  className='w-full  pointer-events-none' src={feuille} alt="" />
        </div>
    );
};

export default Feuille;