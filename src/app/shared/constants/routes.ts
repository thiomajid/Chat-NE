import { createRouteWithParams } from '../utils';

export const $routes = {
  home: () => '',
  notFound: () => '404',
  auth: {
    index: () => 'auth',
    login: () => 'login',
    register: () => 'register',
  },
  user: {
    profile: (params: { userId: string }) =>
      createRouteWithParams('/user/:userId', params),
    update: (params: { userId: string }) =>
      createRouteWithParams('/user/:userId/update', params),
  },
  chat: {
    index: () => 'chat',
    room: (params: { chatId: string }) =>
      createRouteWithParams('chat/:chatId', params),
    details: (params: { chatId: string }) =>
      createRouteWithParams('chat/:chatId/details', params),
  },
};
