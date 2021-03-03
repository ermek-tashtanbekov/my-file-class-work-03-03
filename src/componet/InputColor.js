import { useState } from "react";
function Inputcolor({ value }) {
    let [a, b] = useState(value ?? "#0000");
    return (
        <div>
            <p>{a}</p>
            <input type= "color"  onInput={(e) => b(e.target.value)}/>
        </div>
    )

}
export default Inputcolor;
