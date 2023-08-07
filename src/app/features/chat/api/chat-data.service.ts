import { Injectable, inject } from '@angular/core';
import {
  CollectionReference,
  DocumentReference,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { $firebaseCollections } from '@chat-ne/shared/constants';
import { HotToastService } from '@ngneat/hot-toast';
import { Subject } from 'rxjs';
import { ChatMessage } from '../domain/';

/**
 * Ce service fait office de couche d'accès aux données pour les objets de type {@link ChatMessage}.
 */
@Injectable()
export class ChatDataService {
  private _firestore = inject(Firestore);
  private _toast = inject(HotToastService);

  getMessagesByDiscussion(discussionId: string) {
    const messages$ = new Subject<ChatMessage[]>();
    const messageCollection = collection(
      this._firestore,
      $firebaseCollections.discussions,
    ) as CollectionReference<ChatMessage>;

    const q = query(
      messageCollection,
      where('discussionId', '==', discussionId),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: ChatMessage[] = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      messages$.next(messages);
    });

    return [messages$, unsubscribe];
  }

  async sendMessage(message: ChatMessage) {
    const messsageCollection = collection(
      this._firestore,
      $firebaseCollections.messages,
    ) as CollectionReference<ChatMessage>;

    try {
      await addDoc<ChatMessage>(messsageCollection, {
        ...message,
        sentAt: serverTimestamp(),
      });
    } catch (error) {
      this._toast.error("Une erreur est survenue lors de l'envoi du message");
    }
  }

  async deleteMessage(messageId: string) {
    const chatRef = doc(
      this._firestore,
      $firebaseCollections.messages,
      messageId,
    );
    try {
      await deleteDoc(chatRef);
      this._toast.success('Message supprimé');
    } catch (error) {
      this._toast.error(
        'Une erreur est survenue lors de la suppression du message',
      );
    }
  }

  async updateMessage(messageId: string, content: string) {
    const chatRef = doc(
      this._firestore,
      $firebaseCollections.messages,
      messageId,
    ) as DocumentReference<ChatMessage>;

    try {
      await updateDoc<ChatMessage>(chatRef, { content });
      this._toast.success('Message mis à jour');
    } catch (error) {
      this._toast.error(
        'Une erreur est survenue lors de la mise à jour du message',
      );
    }
  }
}
