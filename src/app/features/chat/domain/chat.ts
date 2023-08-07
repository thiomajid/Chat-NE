import type { Discussion } from './discussion';

/**
 * Les différents types de messages supportés par l'application.
 */
export type ChatMessageType = 'text' | 'image' | 'video' | 'audio' | 'file';

/**
 * Décrit un messsage envoyé dans une {@link Discussion}
 */
export type ChatMessage = {
  id: string;
  sentAt: Date;
  content?: string;
  fileUrl?: string;
  messageType: ChatMessageType;
  discussionId: string;
  senderId: string;
};
