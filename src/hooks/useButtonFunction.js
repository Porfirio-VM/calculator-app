// useButtonFunctions.js
import { useReducer } from "react";
import { reducerActions } from "./reducerActions"; // Import your reducerActions here

export function useButtonFunctions() {
  const [state, dispatch] = useReducer(reducerActions, {
    currentInput: '0',
    previousInput: '',
    operator: '',
  });

  const clickHandler = (button) => {
    const clickedButton = button.target.innerText;
    dispatch({ type: 'input_button', nextInput: clickedButton });
  };

  return { state, clickHandler };
}
