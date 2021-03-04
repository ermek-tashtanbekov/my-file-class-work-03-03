import { useState } from "react";
function Inputtext() {
    let [a, b] = useState("");
    return(
        <div>
            <br></br>
           <h1 style={{transform: `${a}scale( -1 ) `}}>{a}</h1>
            <input type="text"  value={a} onInput={(e) => b(e.target.value)}/>

        </div>
    )
}
export default Inputtext;