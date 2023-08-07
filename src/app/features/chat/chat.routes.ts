import { Routes } from '@angular/router';
import { $routes } from '@chat-ne/shared/constants';

const CHAT_FEATURE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: $routes.chat.index(),
  },
  {
    path: $routes.chat.index(),
    title: 'Chat-NE | Chat',
    loadComponent: () =>
      import('./features/discussion-list/discussion-list.component'),
  },
  {
    path: `${$routes.chat.index()}/:chatId`,
    loadComponent: () =>
      import('./features/discussion-details/discussion-details.component'),
  },
  {
    path: `${$routes.chat.index()}/:chatId/details`,
    loadComponent: () =>
      import('./features/discussion-details/discussion-details.component'),
  },
];

export default CHAT_FEATURE_ROUTES;
