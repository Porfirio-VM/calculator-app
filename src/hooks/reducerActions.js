// reducerActions.js

import { operations } from "../constants";

export function reducerActions(state, action) {
  const buttonActions = {
    '=': handleEquals,
    '.': handleDecimal,
    'DEL': handleDelete,
    'RESET': handleReset,
  };

  if (isNaN(action.nextInput)) {
    if (buttonActions[action.nextInput]) {
      return buttonActions[action.nextInput](state);
    } else {
      return handleOperator(state, action.nextInput);
    }
  } else {
    return handleNumericInput(state, action.nextInput);
  }
}

function handleEquals(state) {
  if (state.previousInput && state.operator && state.currentInput) {
    const result = calculateResults(state.previousInput, state.operator, state.currentInput);
    return {
      ...state,
      previousInput: state.previousInput + ' ' + state.operator + ' ' + state.currentInput + " " + '=',
      currentInput: result,
      operator: '',
    };
  } else {
    return state;
  }
}

function handleDecimal(state) {
  return {
    ...state,
    currentInput: operations['.'](state.currentInput),
  };
}

function handleDelete(state) {
  return {
    ...state,
    currentInput: operations['DEL'](state.currentInput),
  };
}

function handleReset(state) {
  return {
    ...state,
    currentInput: '0',
    previousInput: '',
    operator: ''
  };
}

function handleOperator(state, operator) {
  if (state.previousInput && state.operator && state.currentInput) {
    const result = calculateResults(state.previousInput, state.operator, state.currentInput);
    return {
      ...state,
      previousInput: state.previousInput + ' ' + state.operator + ' ' + state.currentInput + " " + '=',
      currentInput: result,
      operator: '',
    };
  }else{
    return {
      ...state,
      previousInput: state.currentInput,
      operator: operator,
      currentInput: '0',
    };
  }
  
}

function handleNumericInput(state, input) {
  return {
    ...state,
    currentInput: state.currentInput === '0' ? input : state.currentInput + input,
  };
}

function calculateResults(a, operator, b) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if (operations[operator]) {
    const result = operations[operator](num1, num2);
    return result;
  } else {
    console.error(`Unsupported operator: ${operator}`);
    return null;
  }
}
