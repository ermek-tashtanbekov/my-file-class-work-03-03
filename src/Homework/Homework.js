import { useState } from "react";
function Homework({se}) {
    let [a, b] = useState(0);

    return (
        <div className="Homework" >
            <h1 style={{backgroundColor: "red", width: "50px", height: "50px", transform :`rotate(${a}deg)`}}></h1>
            <br></br>
            
             <input type="range" 
            min={0}
            max={360}

             value={a} onInput={({target}) => b(target.value)} />
        </div>
    )
}
export default Homework;