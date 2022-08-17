import React from 'react';
import Scoring from './scoring';
import Choice from './choice/choice';
import Rules from './rules';
import { useState } from "react";


const Game = (props) => {
    const [score, setScore] = useState(0);
    const [choix, setChoix] = useState();

    return (
        <div className='w-full h-full'>
            <Rules dis={props.dis} setDis={props.setDis} />
            <Scoring score={score} />
            <Choice setChoix={setChoix} />
            <p className="text-whiteC " >{choix}</p>
            <button className='absolute w-1/12 h-[5vh] text-whiteC  border-2 border-borderS bottom-5 right-6 rounded-lg' onClick={()=>props.setDis(prevDis=>'block')}>
                RULES
            </button>
        </div>  
    );
};

export default Game;