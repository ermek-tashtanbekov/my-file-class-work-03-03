import { useState } from "react";
function Valuta({ value }) {
    let [a, b] = useState(value ?? 0);
    return (
        <div>

            <input type="number"
                onInput={(e) => b(e.target.value * 85)}
            />  <h4>{a}</h4>
        </div>
    )
}
export default Valuta;