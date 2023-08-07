import type { AppUser } from '@chat-ne/features/user/domain/user';

/**
 * Décrit une discussion entre plusieurs {@link AppUser}.
 */
export type Discussion = {
  id: string;
  usersIds: string[];
};
