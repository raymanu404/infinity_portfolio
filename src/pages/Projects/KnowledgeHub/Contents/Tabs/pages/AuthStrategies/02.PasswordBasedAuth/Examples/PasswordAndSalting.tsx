import MultipleDefContent from '@/Shared/Components/CodeBlocks/MultipleDefContent';
import Notes from '@/Shared/Components/Notes/Notes';
import React from 'react';

const PasswordAndSalting: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <MultipleDefContent
        contents={[
          {
            title: 'Understanding Hashing',
            content: (
              <Notes
                notes={[
                  {
                    note: 'Hashing is a one-way cryptographic function, produces a fixed-size string of characters, called a has',
                    subNotes: [
                      {
                        note: `you can't easily get the original password back from the hash`,
                      },
                      {
                        note: `Imagine a hash function as a blender. You put ingredients (the password) into the blender, and it produces a smoothie (the hash). You can't easily take the smoothie and separate it back into the original ingredients`,
                      },
                      {
                        note: `Password: "password123" Salt: "aBcDeFgHiJkLmNoP" Combined: "aBcDeFgHiJkLmNoPpassword123" Hash: (Result of hashing the combined string)`,
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
