import "./QtySelector.css";

export default function QtySelector({ step, unit, value, setValue }) {


  return (
    <div className="qty-selector">
      <button type="button" onClick={() => setValue(Math.max(value - step, 0))}> - </button>
      <input value={`${value} ${unit}`} required readOnly/>
      <button type="button" onClick={() => setValue(value + step)}> + </button>
    </div>
  );
}
