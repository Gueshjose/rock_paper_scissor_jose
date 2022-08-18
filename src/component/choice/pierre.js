import pierre from '../../images/icon-rock.svg';
import React from 'react';

const Pierre = (props) => {
    return (
        <div id="pierre" className='absolute  top-[52%] left-[33%]  p-9 bg-whiteC rounded-[50%] border-[1.2vw] border-pierre w-1/3 shadow-inner shadow-iconeP cursor-pointer m-auto  text-center' onClick={(e)=>props.setChoix(e.target.id)}>
            <img src={pierre} className="w-full pointer-events-none" alt="" />
        </div>
    );
};

export default Pierre;