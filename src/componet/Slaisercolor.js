import { useState } from "react";
function Slaisercolor() {
    const [a, b] = useState(0);
    const [d, i] = useState(0);
    const [f, g] = useState(0);
    
    return(
        <div className="Slaisercolor" style={{backgroundColor :`rgb( ${a}, ${d}, ${f})`}}>
            <div>
                <input type="range" min="0" max="255" onInput={({target}) => b(target.value)} />
            </div>
            <div>
                <input type="range" min="0" max="255" onInput={({target}) => i(target.value)} />
            </div>
            <div>
                <input type="range" min="0" max="255" onInput={({target}) => g(target.value)} />
            </div>
           
        </div>
    )
}
export default Slaisercolor;