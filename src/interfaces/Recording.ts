import { Transcription } from './Transcription';

export interface Recording {
  id: string;
  title: string;
  url: string;
  showGroup: boolean;
  userId: string;
  duration: number;
  favorite: boolean;
  groupId?: string;
  createdAt: Date;
  updatedAt: Date;
  transcriptions: Transcription[];
}
