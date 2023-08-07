import { Injectable, inject } from '@angular/core';
import { Firestore, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { HotToastService } from '@ngneat/hot-toast';
import { ChatMessage } from '../domain/';

/**
 * Ce service fait office de couche d'accès aux données pour les objets de type {@link ChatMessage}.
 */
@Injectable()
export class ChatDataService {
  private _firestore = inject(Firestore);
  private _toast = inject(HotToastService);

  async deleteMessage(messageId: string) {
    const chatRef = doc(this._firestore, 'chat', messageId);
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
    const chatRef = doc(this._firestore, 'chat', messageId);
    try {
      await updateDoc(chatRef, { content });
    } catch (error) {}
  }
}
