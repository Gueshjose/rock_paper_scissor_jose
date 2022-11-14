
import Pierre from "./pierre";
import Sciseaux from "./sciseaux";
import Feuille from "./feuille";


function Choice(props) {
    
    
    return(
        <div className={"lg:w-1/3 md:w-[90%] h-[75vh] bg-[url('./images/bg-triangle.svg')] mx-auto bg-auto bg-no-repeat bg-center relative"}>
                <Feuille setChoix={props.setChoix} />
                <Sciseaux setChoix={props.setChoix} />
                <Pierre setChoix={props.setChoix} />                
            
        </div>  
    );
}

export default Choice;