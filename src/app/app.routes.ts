import { Routes } from '@angular/router';
import { $routes } from './shared/constants';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: $routes.auth.index(),
  },
  {
    path: $routes.auth.index(),
    loadChildren: () => import('@chat-ne/features/user/user.routes'),
  },
  {
    path: $routes.chat.index(),
    loadChildren: () => import('@chat-ne/features/chat/chat.routes'),
  },
];
