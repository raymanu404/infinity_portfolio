import Notes from '@/Shared/Components/Notes/Notes';
import React from 'react';
import MultipleDefContent from '../../Components/MultipleDefContent';

const PasswordAndSalting: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <MultipleDefContent
        contents={[
          {
            title: 'What is Authentication?',
            content: (
              <Notes
                notes={[
                  {
                    note: 'Authentication is the process of verifying the identity of a user, device, or any other entity attempting to access a system or resource.',
                    subNotes: [
                      {
                        note: '"Are you who you say you are?',
                      },
                    ],
                  },
                ]}
                specialNotes
              />
            ),
          },
        ]}
      />
    </div>
  );
};

PasswordAndSalting.displayName = 'PasswordAndSalting';

export default PasswordAndSalting;
