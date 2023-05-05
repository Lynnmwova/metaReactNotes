import { useRef, useState } from "react";

function Calculator() {
  const InputRef = useRef(null);
  const ResultRef = useRef(null);
  const [result, setResult] = useState(0);
  const plus = (e) => {
    e.PreventDefault();
    setResult((result) => result + Number(InputRef.current.value));
  };
  const minus = (e) => {
    e.PreventDefault();
    setResult((result) => result - Number(InputRef.current.value));
  };
  const times = (e) => {
    e.PreventDefault();
    setResult((result) => result * Number(InputRef.current.value));
  };
  const divide = (e) => {
    e.PreventDefault();
    setResult((result) => result / Number(InputRef.current.value));
  };

  const resetInput = (e) => {
    e.PreventDefault();
    InputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.PreventDefault();
    setResult((preVal) => preVal * 0);
  };

  return (
    <>
      <div>
        <h1> The simplest working Calculator ever!</h1>
      </div>
      <form>
        <p ref={ResultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={InputRef}
          type="number"
          placeholder="Type a number here"
        />
        <button onClick={plus}> Add </button>
        <button onClick={minus}> minus </button>
        <button onClick={times}> times</button>
        <button onClick={divide}> divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </>
  );
}

export default Calculator;
