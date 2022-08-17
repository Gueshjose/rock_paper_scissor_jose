import logo from '../images/logo.svg';


function Scoring(props){
    
    return(
        <div className="w-2/5 h-[15vh] border-2 border-borderS p-3 flex justify-between mx-auto mt-5 rounded-xl">
            <div className="flex flex-col items-start  justify-center ">
                <img className='w-[80%] ' src={logo} alt="" />
            </div>
            <div className='flex flex-col bg-whiteC w-1/5 rounded-md justify-center '>
                <p className='text-scoreC text-[0.7vw] font-semibold'>SCORE</p>
                <h2 className='text-scoreVC text-4xl font-black tracking-[-0.1em]'>{props.score}</h2>
            </div>
        </div>
    );
}

export default Scoring;
