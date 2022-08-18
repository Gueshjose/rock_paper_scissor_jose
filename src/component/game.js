import React from 'react';
import Scoring from './scoring';
import Choice from './choice/choice';
import Rules from './rules';
import Battle from './battle/Battle';
import Resultat from './resultat/Resultat';
import { useState } from "react";
import { type } from '@testing-library/user-event/dist/type';


const Game = (props) => {
    const [score, setScore] = useState(0);
    const [choix, setChoix] = useState("");
    const [ia, setIa] = useState("");
    
    return (
        <div className='w-full h-full'>
            <Rules dis={props.dis} setDis={props.setDis} />
            <Scoring score={score} />
            {
                choix == "" &&
                    <Choice setChoix={setChoix} />
            }
            {
                (choix != "" && ia == "") && 
                    <Battle choix={choix} ia={ia} setIa={setIa} setChoix={setChoix} />
            }
            {
                (choix != "" && ia != "") &&
                    <Resultat score={score} setScore={setScore} choix={choix} ia={ia} setIa={setIa} setChoix={setChoix} />
            }
        
            <button className='absolute w-1/12 h-[5vh] text-whiteC  border-2 border-borderS bottom-5 right-6 rounded-lg' onClick={()=>props.setDis('block')}>
                RULES
            </button>
        </div>  
    );
};

export default Game;