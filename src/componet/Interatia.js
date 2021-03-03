import { useState } from "react";

function Interatia(){
    let [a, b] = useState(0);
    return(
        <div>
            <h2>{a}</h2>
            <button onClick={(e) => b(a++)}>+</button>
            <button onClick={(e) => b(a--)}>-</button>
        </div>
    )
}
export default Interatia