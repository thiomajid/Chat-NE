import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
} from '@angular/router';
import { provideFirebase } from '@chat-ne/config/firebase';
import { provideNgRx } from '@chat-ne/config/ngrx';
import { APP_ROUTES } from './app.routes';
import { provideNgNeat } from './config/ngneat';

export const appConfig: ApplicationConfig = {
  providers: [
    // Angular
    provideRouter(APP_ROUTES, withComponentInputBinding(), withDebugTracing()),
    provideAnimations(),
    provideHttpClient(),

    // Custom
    provideNgRx(),
    provideFirebase(),
    provideNgNeat(),
  ],
};
