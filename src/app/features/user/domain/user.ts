/**
 * Décrit un utilisateur de l'application.
 */
export type AppUser = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  profilePicture?: string;
};

/**
 * Modèle de création de compte pour un {@link AppUser}.
 */
export type AppUserInsertModel = Omit<AppUser, 'id'>;
