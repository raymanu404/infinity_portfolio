import { BoxCardContent } from '@/Shared/Utils/Helpers/styled-components';
import React from 'react';
import { NotesType } from './interfaces';

interface NotesProps {
  notes: NotesType;
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <BoxCardContent sx={{ padding: '20px' }}>
      <h2>Note</h2>
      {Array.isArray(notes) ? (
        notes.map((note, index) => (
          <ul key={index}>
            <li>{typeof note === 'string' ? note : note.note}</li>
            {note && typeof note !== 'string' && note.subNotes && (
              <BoxCardContent sx={{ paddingLeft: '20px', paddingTop: '10px' }}>
                <ul>
                  {note.subNotes.map((subNote, subIndex) => (
                    <li key={`${index}-${subIndex}`}>
                      {typeof subNote === 'string' ? subNote : subNote.note}
                    </li>
                  ))}
                </ul>
              </BoxCardContent>
            )}
          </ul>
        ))
      ) : (
        <>{notes}</>
      )}
    </BoxCardContent>
  );
};

Notes.displayName = 'Notes';

export default Notes;
