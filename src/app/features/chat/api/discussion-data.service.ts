import { Injectable } from '@angular/core';
import { PageRequest } from '@chat-ne/shared/types';
import { Discussion } from '../domain/';

/**
 * Ce service fait office de couche d'accès aux données pour les objets de type {@link Discussion}.
 */
@Injectable()
export class DiscussionDataService {
  createDiscussion(discussion: Discussion) {}

  deleteDiscussion(discussionId: string) {}

  updateDiscussion(discussionId: string, discussion: Discussion) {}

  getDiscussion(discussionId: string) {}

  getDiscussions(page: PageRequest) {}

  addUserToDiscussion(discussionId: string, userId: string) {}
}
