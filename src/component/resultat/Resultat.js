import Victoire from './Vistoire';
import Defaite from './Defaite';
import Egalite from './Egalite';
import Pierre from '../battle/battlePierre';
import Feuille from '../battle/battleFeuille';
import Sciseaux from '../battle/battleSciseaux';

import React from 'react';

const Resultat = (props) => {
    return (
        <div className="w-2/3 h-[75vh] mx-auto relative grid grid-cols-3 lg:mt-16  mt-2  ">
        <div className='flex md:flex-col-reverse lg:flex-col  '>
            <div className="row-span-2">
                <h2 className="text-whiteC text-xl font-black text-center">YOU PICKED </h2>
            </div>
            <div className="flex row-span-4 justify-center ">
                {
                    (props.choix=="feuille" ) &&
                        <Feuille />
                }
                {
                    props.choix =="sciseaux" &&
                        <Sciseaux />
                }
                {
                    props.choix =="pierre" &&
                        <Pierre />
                }
            </div>
        </div>
        <div className='flex flex-col lg:mt-40 mt-56 '>
            
            <div className="flex lg:row-span-2 rox-span-8 content-center ">
            {
                    ((props.choix=="pierre" && props.ia == "sciseaux") || (props.choix=="sciseaux" && props.ia == "feuille")|| (props.choix=="feuille" && props.ia == "pierre")) &&
                        <Victoire score={props.score} setScore={props.setScore} setChoix={props.setChoix} setIa={props.setIa} />
                }
                {
                    ((props.choix=="feuille" && props.ia == "sciseaux") || (props.choix=="pierre" && props.ia == "feuille")|| (props.choix=="sciseaux" && props.ia == "pierre")) &&
                        <Defaite score={props.score} setScore={props.setScore} setChoix={props.setChoix} setIa={props.setIa} />
                }
                {
                     ((props.choix=="feuille" && props.ia == "feuille") || (props.choix=="pierre" && props.ia == "pierre")|| (props.choix=="sciseaux" && props.ia == "sciseaux")) &&
                        <Egalite setChoix={props.setChoix} setIa={props.setIa} />
                }
            </div>
        </div>
        <div className='flex md:flex-col-reverse lg:flex-col '>
            <div className="row-span-2">
                <h2 className="text-whiteC text-xl font-black text-center">THE HOUSE PICKED </h2>
            </div>
            <div className="flex row-span-4 justify-center">
                {
                props.ia =="feuille" &&
                    <Feuille />
                }
                {
                props.ia =="sciseaux" &&
                    <Sciseaux />
                }
                {
                props.ia =="pierre" &&
                    <Pierre />
                }
            </div>
        </div>
        
    </div> 
    );
};

export default Resultat;