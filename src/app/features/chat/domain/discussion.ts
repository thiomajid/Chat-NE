import type { AppUser } from '@chat-ne/features/user/domain/user';

export type DiscussionType = 'private' | 'group';

/**
 * Décrit une discussion entre plusieurs {@link AppUser}.
 */
export type Discussion = {
  id: string;
  discussionType: DiscussionType;
  usersIds: string[];
  adminsIds?: string[];
};
