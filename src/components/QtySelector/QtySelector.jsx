import "./QtySelector.css";

export default function QtySelector({num, setNum, unit, step}){

    function increase(){
        setNum(num + step)
    }
    function decrease(){
        setNum(  Math.max(num - step, 0) )
    }

    return(
        <div className="qty-selector">
            {/* stuff will go here */}
            <button onClick={decrease} type="button" className="primary-btn">-</button>
            <input value={`${num} ${unit}`} required/>
            <button onClick={increase} type="button" className="primary-btn">+</button>
        </div>
    )
}