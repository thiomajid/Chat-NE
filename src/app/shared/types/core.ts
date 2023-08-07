/**
 * Definie un objet qui peut être {@link undefined} ou de type {@link T}.
 */
export type Maybe<T> = T | undefined;

/**
 * Définit la quantité de données à récupérer avec les requêtes de pagination.
 */
export type PageRequest = {
  page: number;
  size: number;
};
