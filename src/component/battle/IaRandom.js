

import React from 'react';

const IaRandom = (props) => {
    setTimeout(() => {        
        switch( Math.floor(Math.random()*2)){
            case 0: 
            console.log('a');
                props.setIa('pierre');
                break;
            case 1: 
            console.log('b');
            props.setIa('feuille');
                break;
            case 2: 
            console.log('c');
    
            props.setIa('sciseaux');
                break;
       }
    }, 3000);
    
    
};

export default IaRandom;