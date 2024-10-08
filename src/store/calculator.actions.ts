import { createAction, props } from '@ngrx/store';

export const addNumber = createAction('[Calculator] Add Number', props<{ number: string }>());
export const addOperation = createAction('[Calculator] Add Operation', props<{ operation: string }>());
export const clear = createAction('[Calculator] Clear');
export const calculate = createAction('[Calculator] Calculate');
