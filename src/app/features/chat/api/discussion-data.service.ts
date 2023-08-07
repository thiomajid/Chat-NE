import { Injectable, inject } from '@angular/core';
import {
  CollectionReference,
  DocumentReference,
  Firestore,
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import type { AppUser } from '@chat-ne/features/user/domain';
import { $firebaseCollections } from '@chat-ne/shared/constants';
import { PageRequest } from '@chat-ne/shared/types';
import { HotToastService } from '@ngneat/hot-toast';
import { Subject } from 'rxjs';
import { Discussion } from '../domain/';

/**
 * Ce service fait office de couche d'accès aux données pour les objets de type {@link Discussion}.
 */
@Injectable()
export class DiscussionDataService {
  private _firestore = inject(Firestore);
  private _toast = inject(HotToastService);

  async createDiscussion(discussion: Discussion) {
    const discussionCollection = collection(
      this._firestore,
      $firebaseCollections.discussions,
    );

    try {
      await addDoc(discussionCollection, discussion);
      return true;
    } catch (error) {
      this._toast.error(
        'Une erreur est survenue lors de la création de la discussion',
      );
      return false;
    }
  }

  async deleteDiscussion(discussionId: string) {
    const discussionRef = doc(
      this._firestore,
      $firebaseCollections.discussions,
      discussionId,
    );

    try {
      await deleteDoc(discussionRef);
      return true;
    } catch (error) {
      this._toast.error(
        'Une erreur est survenue lors de la suppression de la discussion',
      );
      return false;
    }
  }

  getDiscussion(discussionId: string) {
    const discussionRef = doc(
      this._firestore,
      $firebaseCollections.discussions,
      discussionId,
    ) as DocumentReference<Discussion>;

    return discussionRef;
  }

  getDiscussions(userId: string, page: PageRequest) {
    const discussions$ = new Subject<Discussion[]>();

    const discussionCollection = collection(
      this._firestore,
      $firebaseCollections.discussions,
    ) as CollectionReference<Discussion>;

    const q = query<Discussion>(
      discussionCollection,
      where('usersIds', 'array-contains', userId),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const _data = querySnapshot.docs.map((elt) => {
        return {
          ...elt.data(),
        };
      });
    });

    return [discussions$, unsubscribe];
  }

  /**
   * Ajoute un nouvel {@link AppUser} à une {@link Discussion} de type `group`.
   */
  async addUserToDiscussion(discussionId: string, userId: string) {
    const discussionRef = doc(
      this._firestore,
      $firebaseCollections.discussions,
      discussionId,
    ) as DocumentReference<Discussion>;

    try {
      await updateDoc<Discussion>(discussionRef, {
        usersIds: arrayUnion(userId),
      });

      this._toast.success('Utilisateur ajouté');
    } catch (error) {
      this._toast.error(
        "Une erreur est survenue lors de l'ajout de l'utilisateur",
      );
    }
  }

  /**
   * Supprime un {@link AppUser} d'une {@link Discussion} de type `group`.
   * @param discussionId L'identifiant de la {@link Discussion} à modifier.
   * @param userId L'identifiant de l'{@link AppUser} à supprimer.
   */
  async deleteUserFromDiscussion(discussionId: string, userId: string) {
    const discussionRef = doc(
      this._firestore,
      $firebaseCollections.discussions,
      discussionId,
    ) as DocumentReference<Discussion>;

    try {
      await updateDoc<Discussion>(discussionRef, {
        usersIds: arrayRemove(userId),
      });
    } catch (error) {
      this._toast.error(
        "Une erreur est survenue lors de la suppression de l'utilisateur",
      );
    }
  }
}
