import Game from "./component/game";
import { useState } from "react";
import './App.css';

function App() {
  const [dis, setDis] = useState('block');
  return (
    <div className="w-screen h-screen text-center bg-myBlue overflow-hidden" >
    <h1>Yo</h1>
      <Game dis={dis} setDis={setDis}/>
    </div>
  );
}

export default App;
