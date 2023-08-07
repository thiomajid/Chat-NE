import { Routes } from '@angular/router';
import { $routes } from '@chat-ne/shared/constants';

const USER_FEATURE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: $routes.auth.login(),
  },
  {
    path: $routes.auth.login(),
    title: 'Chat-NE | Connexion',
    loadComponent: () => import('./features/login/login.component'),
  },
  {
    path: $routes.auth.register(),
    title: 'Chat-NE | Inscription',
    loadComponent: () =>
      import('./features/registration/registration.component'),
  },
];

export default USER_FEATURE_ROUTES;
