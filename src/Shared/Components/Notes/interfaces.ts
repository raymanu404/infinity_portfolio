export interface NoteI {
  note: string;
  subNotes?: NoteI[];
}

export type NotesType = NoteI[] | React.ReactNode;
