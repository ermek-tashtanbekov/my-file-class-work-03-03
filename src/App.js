import './App.css';

import Fareigit from './componet/Fareigit';
import Inputcolor from './componet/InputColor';
import InputLength from './componet/InputLength';
import InputReng from './componet/InputReng';
import Interatia from './componet/Interatia';
import Size from './componet/Size';
import Slaisercolor from './componet/Slaisercolor';
import Valuta from './componet/Valuta';
import Homework from './Homework/Homework';
import Inputtext from './Homework/Inputtext';

function App() {
  
  return (
    <div className="App">
      <Interatia />
      <InputLength />
     <Inputcolor />
     <InputReng min={0} max={200} />
     <Valuta />
     <Fareigit />
     <Size />
     <Slaisercolor />
     <Homework min={0} max={250} />
     
     <Inputtext />
     
    </div>
  );
}

export default App;
