import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from './calculator.actions';

export interface CalculatorState {
  previousInput: string;
  currentInput: string;
  operator: string;
}

export const initialState: CalculatorState = {
  previousInput: '',
  currentInput: '',
  operator: ''
};

export const calculatorReducer = createReducer(
  initialState,
  on(CalculatorActions.addNumber, (state, { number }) => ({
    ...state,
    currentInput: state.currentInput + number
  })),
  on(CalculatorActions.addOperation, (state, { operation }) => ({
    ...state,
    operator: operation,
    previousInput: state.currentInput,
    currentInput: ''
  })),
  on(CalculatorActions.clear, () => initialState),
  on(CalculatorActions.calculate, (state) => {
    const prev = parseFloat(state.previousInput);
    const curr = parseFloat(state.currentInput);
    let result;

    switch (state.operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '/':
        result = prev / curr;
        break;
      default:
        return state;
    }

    return { ...state, currentInput: result.toString(), previousInput: '', operator: '' };
  })
);
