import { Injectable } from '@angular/core';
import { AppUser } from '../domain/';

/**
 * Ce service fait office de couche d'accès aux données pour les objets de type {@link AppUser}.
 */
@Injectable()
export class UserDataService {
  findById(id: string) {}

  updateProfile(user: AppUser) {}

  deleteAccount(userId: string) {}
}
