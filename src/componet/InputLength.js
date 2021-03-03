import { useState } from "react";
function InputLength() {
      let [a, b] = useState ("");
    return(
        <div>
           <h2> this Length "{a}"</h2>
           <input type= "text" onInput={(e) => b(e.target.value.length)} />
        </div>
    )
}

export default InputLength;