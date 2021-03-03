import { useState } from "react";
function InputReng({value, min, max }) {
    let [a, b] = useState (value ?? 0);
    return(
        <div>
            <input type="range"
              min={min}
              max={max}
              value={a}
              onInput={(e) => b(e.target.value)}
            /> {a} /{max}
        </div>
    )
}
export default InputReng;