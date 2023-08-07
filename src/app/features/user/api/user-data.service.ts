import { Injectable, inject } from '@angular/core';
import {
  DocumentReference,
  Firestore,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { HotToastService } from '@ngneat/hot-toast';
import { AppUser } from '../domain/';

/**
 * Ce service fait office de couche d'accès aux données pour les objets de type {@link AppUser}.
 */
@Injectable()
export class UserDataService {
  private _firestore = inject(Firestore);
  private _toast = inject(HotToastService);

  async findById(userId: string) {
    const userRef = doc(
      this._firestore,
      'users',
      userId,
    ) as DocumentReference<AppUser>;
    const _user = await getDoc(userRef);

    return structuredClone(_user.data());
  }

  async updateProfile(user: AppUser) {
    const userRef = doc(this._firestore, 'users', user.id);
    try {
      await updateDoc(userRef, user);
      this._toast.success('Profil mis à jour');
    } catch (error) {
      this._toast.error(
        'Une erreur est survenue lors de la mise à jour du profil',
      );
    }
  }

  async deleteAccount(userId: string) {
    const userRef = doc(this._firestore, 'users', userId);
    try {
      await deleteDoc(userRef);
      this._toast.success('Compte supprimé');

      return true;
    } catch (error) {
      this._toast.error(
        'Une erreur est survenue lors de la suppression du compte',
      );
      return false;
    }
  }
}
