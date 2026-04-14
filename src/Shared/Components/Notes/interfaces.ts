import { ReactNode } from 'react';

export interface NoteI {
  note: string | ReactNode;
  hideList?: boolean;
  orderedList?: boolean;
  subNotes?: NoteI[];
}

export type NotesType = NoteI[] | ReactNode;
