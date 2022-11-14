import React from 'react';

const Victoire = (props) => {
    return (
        <div className="row-span-12 items-center  flex flex-col items-center gap-4 mx-auto w-full">
                <h2 className="text-whiteC text-5xl font-black ">YOU WIN </h2>
                <button className=' text-scoreVC bg-whiteC hover:text-green px-14 rounded rounded-xl py-1 mx-auto font-semibold' onClick={()=>{props.setChoix(""); props.setIa("");props.setScore(props.score+1)}}>PLAY AGAIN</button>
        </div>
    );
};

export default Victoire;