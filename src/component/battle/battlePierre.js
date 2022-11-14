import pierre from '../../images/icon-rock.svg';
import React from 'react';

const battlePierre = () => {
    return (
        <div className='absolute  top-[15%]   lg:p-14 p-8 bg-whiteC rounded-[50%] border-[1.8vw] border-pierre w-1/4 shadow-inner shadow-iconeP  text-center' >
            <img src={pierre} className="w-full " alt="" />
        </div>
    );
};

export default battlePierre;