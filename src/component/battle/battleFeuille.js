import feuille from '../../images/icon-paper.svg';

import React from 'react';

const battleFeuille = () => {
    return (
        <div  className='absolute  top-[15%]  lg:p-14 p-8 bg-whiteC rounded-[50%] border-[1.8vw] border-feuille w-1/4 shadow-inner shadow-iconeF text-center' >
            <img src={feuille} className="w-full  " alt="" />
        </div>
    );
};

export default battleFeuille;