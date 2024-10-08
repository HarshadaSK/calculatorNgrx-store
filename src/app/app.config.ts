import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';

import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { calculatorReducer } from '../store/calculator.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ calculator: calculatorReducer }),
    provideHttpClient(),
    provideRouter([]) // Add your routing configuration if needed
  ],
};
