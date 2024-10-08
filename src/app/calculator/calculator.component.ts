import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { CommonModule } from '@angular/common';
import { CalculatorState } from '../../store/calculator.reducer';
import { addNumber, addOperation, calculate, clear } from '../../store/calculator.actions';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  previousInput$: Observable<string>;
  currentInput$: Observable<string>;
  operator$: Observable<string>;

  constructor(private store: Store<{ calculator: CalculatorState }>) {
    this.previousInput$ = this.store.select(state => state.calculator.previousInput);
    this.currentInput$ = this.store.select(state => state.calculator.currentInput);
    this.operator$ = this.store.select(state => state.calculator.operator);
  }

  addNumber(number: string) {
    this.store.dispatch(addNumber({ number }));
  }

  addOperation(operation: string) {
    this.store.dispatch(addOperation({ operation }));
  }

  clear() {
    this.store.dispatch(clear());
  }

  calculate() {
    this.store.dispatch(calculate());
  }
}
