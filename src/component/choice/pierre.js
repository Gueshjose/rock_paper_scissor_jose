import pierre from '../../images/icon-rock.svg';
import React from 'react';

const Pierre = (props) => {
    return (
        <div id="pierre" className=' w-[22%] absolute   top-[45vh] left-[32vw] md:left-[11vw] lg:p-9 p-5 bg-whiteC rounded-[50%] lg:border-[1.2vw] border-[2.5vw] border-pierre lg:w-1/3 shadow-inner shadow-iconeP cursor-pointer m-auto  text-center' onClick={(e)=>props.setChoix(e.target.id)}>
            <img src={pierre} className="w-full pointer-events-none" alt="" />
        </div>
    );
};

export default Pierre;