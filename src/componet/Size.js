import { useState } from "react";
function Size() {
    let [a, b] = useState (16);
    return(
        <div>
            <span style={{fontSize : a + "px"}}>Example</span>
            <input type="number" value={a} onInput={(e) => b(e.target.value)} />
        </div>
    )
}
export default Size;