import React from 'react';

const Defaite = (props) => {
    return (
        <div className="row-span-4 items-center  flex flex-col items-center gap-4 mx-auto">
                <h2 className="text-whiteC text-5xl font-black">YOU LOOSE </h2>
                <button className=' text-scoreVC bg-whiteC hover:text-pierre px-14 rounded rounded-xl py-1 mx-auto font-semibold' onClick={()=>{props.setChoix(""); props.setIa("");props.score>0 && props.setScore(props.score-1)}}>PLAY AGAIN</button>
        </div>
    );
};

export default Defaite;