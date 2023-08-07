import { isDevMode } from '@angular/core';
import { APP_EFFECTS } from '@chat-ne/shared/constants';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export function provideNgRx() {
  return [
    provideStore(),
    provideEffects(APP_EFFECTS),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideRouterStore(),
  ];
}
