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
    <>
      <div>
        <h1> The simplest working Calculator ever!</h1>
      </div>
      <Form>
        <p ref={ResultRef}>{result}</p>
        <Form.Group className="row g-3 align-items-center bg-light">
          <input
            pattern="[0-9]"
            ref={InputRef}
            type="number"
            placeholder="Type a number here"
          />
        </Form.Group>
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
    </>
  );
}

export default Calculator;
