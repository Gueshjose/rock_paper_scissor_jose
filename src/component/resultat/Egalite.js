import React from 'react';

const Egalite = (props) => {
    return (
        <div className="row-span-4 items-center  flex flex-col items-center gap-4 mx-auto">
                <h2 className="text-whiteC text-5xl font-black">DRAW MATCHE </h2>
                <button className=' text-scoreVC bg-whiteC hover:text-cyan px-14 rounded rounded-xl py-1 mx-auto font-semibold'onClick={()=>{props.setChoix(""); props.setIa("")}}>PLAY AGAIN</button>
        </div>
    );
};

export default Egalite;