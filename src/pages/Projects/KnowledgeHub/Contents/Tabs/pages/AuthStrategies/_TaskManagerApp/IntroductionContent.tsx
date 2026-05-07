import Notes from '@/Shared/Components/Notes/Notes';
import { Typography } from '@mui/material';
import React from 'react';
import MultipleDefContent from '../Components/MultipleDefContent';

const IntroductionContent: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <MultipleDefContent
        contents={[
          {
            title: 'Introduction into Task Manager App With Authentication Flows ',
            content: (
              <div>
                <Notes
                  notes={[
                    {
                      note: 'The Task Manager app  is a tool allows users to create, manage, and track their tasks. Think of it like a simplified version of popular task management apps like Todoist, Asana, or Trello. For our purposes, the core features will include:',
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <>
                              <Typography>
                                <b>User Registration</b>
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>User Login</b>
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Task Creation</b>
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Task Listing</b>
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Task Editing</b>
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Task Deletion</b>
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>User Logout</b>
                              </Typography>
                            </>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </div>
            ),
          },
          {
            title: 'Considerations for a Real-World Task Manager',
            content: (
              <div>
                <Notes
                  notes={[
                    {
                      note: `It's important to keep in mind how these techniques would integrate with a real backend system. In a production environment, the backend would be responsible for:`,
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Storing User Credentials</b>: Securely storing usernames,
                                passwords (hashed and salted), and other user information in a
                                database.
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Verifying Credentials</b>: Authenticating users by comparing the
                                entered password (hashed and salted) with the stored password.
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Issuing JWTs</b>: Generating and signing JWTs upon successful
                                authentication.
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Protecting API Endpoints</b>: Verifying the validity of JWTs
                                before allowing access to protected API endpoints (e.g., task
                                creation, task editing).
                              </Typography>
                            </>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

IntroductionContent.displayName = 'IntroductionContent';

export default IntroductionContent;
