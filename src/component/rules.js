import rulesImg from '../images/image-rules.svg';
import { useState } from "react";
import exit from  '../images/icon-close.svg';

function Rules() {
    const [dis, setDis] = useState('block');

    return (
        <div className={'w-screen h-screen absolute top-0 ' + dis}>
            <div className='w-1/5 h-[45%] bg-whiteC left-[40%] my-center p-3 z-10 fixed rounded-xl py-8'> 
                <div className='w-[90%] mx-auto flex h-1/5'>
                    <h2 className='text-scoreVC text-2xl font-bold'>RULES</h2>
                    <img src={exit} alt=""  className='ml-auto h-4 cursor-pointer' onClick={()=>setDis(prevDis=>'hidden')}/>
                </div>
                <div className='p-2'>
                    <img className='mx-auto w-[85%] mt-1/5' src={rulesImg} alt="" />
                </div>
            </div>
            <div className='w-full h-full bg-[#000000] opacity-40'>

            </div>
        </div>
        
    )
    
};

export default Rules