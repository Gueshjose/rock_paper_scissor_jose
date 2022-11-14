import Pierre from "./battlePierre";
import Sciseaux from "./battleSciseaux";
import Feuille from "./battleFeuille";
import BattleDefault from "./battleDefault";
import IaRandom from "./IaRandom";

import { useState } from "react";

import React from 'react';

const Battle = (props) => {
    
    
    return (
        <div className="w-2/3 h-[75vh] mx-auto relative grid grid-cols-2 grid-row-1 lg:mt-16  mt-2 ">
            <div className='flex md:flex-col-reverse lg:flex-col  '>
                <div className="row-span-2">
                    <h2 className="text-whiteC text-xl font-black text-center">YOU PICKED </h2>
                </div>
                <div className="flex row-span-4 justify-center ">
                    {
                    props.choix =="feuille" &&
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
           
            <div className='flex md:flex-col-reverse lg:flex-col '>
                <div className="row-span-2">
                    <h2 className="text-whiteC text-xl font-black text-center">THE HOUSE PICKED </h2>
                </div>
                <div className="flex row-span-4 justify-center">
                    <IaRandom setIa={props.setIa} />
                    {
                    props.ia =="" &&
                        <BattleDefault />
                    }
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

export default Battle;