import { useState, useReducer } from "react";

const initialState = {count: 0, step: 1};

// (current state, action -> that we pass in dispatch fxn)
function reducer(state, action) {
  console.log(state, action);
  // return state + action; // what ever we return here will become the next state -> state is the current state -> and action is the thing which we have pass the argument in dispatch fxn

  // switch (action.type) {
  //   case "inc":
  //     return state + 1;
  //   case "dec":
  //     return state - 1;
  //   case "setCount":
  //     return  action.payload;
  //   default:
  //     return 0;
  // }

  switch(action.type) {
    case 'dec':
      return {...state, count: state.count - state.step} ;
    case 'inc':
      return {...state, count: state.count + state.step};
    case 'setCount':
      return {...state, count: action.payload};
    case 'setStep': 
      return {...state, step: action.payload};
    case 'reset':
      return initialState;
    default:
      throw new Error("unknown action")
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  
  const [state, dispatch] = useReducer(reducer, initialState);
  const {count, step} = state;

  // [count, dispatch] -> useReducer fxn return two thing -> current state and dispatch fxn
  // const [count, dispatch] = useReducer(reducer, 0); // (reducer fxn , initial state) 

 

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec"});
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // dispatch(1); //here 1 is nothing but the action
    dispatch({ type: "inc" });

    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({type: 'setStep', payload: Number(e.target.value)})
  };

  const reset = function () {
    dispatch({type: 'reset'}); //One of the advantage -> to update the state at same time
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
