import { Injectable } from '@angular/core';
import { AppUser, AppUserInsertModel, LoginFormData } from '../domain/';

/**
 * Service de contrôle d'accès pour tous les {@link AppUser}
 */
@Injectable()
export class AuthentificationService {
  login(data: LoginFormData) {}

  createAccount(userData: AppUserInsertModel) {}
}
