import { useRef, useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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
    <div className="calc-container">
      <div>
        <h2>A SIMPLE CALCULATOR</h2>
      </div>
      <div className="card">
        <Form>
          <p ref={ResultRef}> {result}</p>
          <input
            className="inputStyle"
            pattern="[0-9]"
            ref={InputRef}
            type="number"
            placeholder="Type a number here"
          />{" "}
        </Form>
        <div className="form-container d-grid gap-2 col-6 mx-auto">
          <Button onClick={plus} className=" btn btn-secondary">
            {" "}
            Add{" "}
          </Button>
          <Button onClick={minus} className=" btn btn-secondary">
            {" "}
            minus{" "}
          </Button>
          <Button onClick={times} className=" btn btn btn-secondary">
            {" "}
            times
          </Button>
          <Button onClick={divide} className=" btn btn-secondary">
            {" "}
            divide
          </Button>
          <Button onClick={resetInput} className=" btn btn-secondary">
            reset input
          </Button>
          <Button onClick={resetResult} className=" btn btn-secondary">
            reset result
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
