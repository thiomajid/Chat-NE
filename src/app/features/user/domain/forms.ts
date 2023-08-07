import { AppUser } from './user';

/**
 * Modèle de création de compte pour un {@link AppUser}.
 */
export type LoginFormData = Pick<AppUser, 'phoneNumber' | 'password'>;
