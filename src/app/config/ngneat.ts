import { importProvidersFrom } from '@angular/core';
import { HotToastModule } from '@ngneat/hot-toast';

export function provideNgNeat() {
  return importProvidersFrom(
    HotToastModule.forRoot({
      position: 'bottom-center',
    }),
  );
}
