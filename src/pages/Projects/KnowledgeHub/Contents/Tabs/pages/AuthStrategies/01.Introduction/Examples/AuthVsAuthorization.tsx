import Notes from '@/Shared/Components/Notes/Notes';
import { BoxCardContent } from '@/Shared/Utils/Helpers/styled-components';
import { Typography } from '@mui/material';
import React from 'react';
import MultipleDefContent from '../../Components/MultipleDefContent';

const AuthVsAuthorization: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <MultipleDefContent
        contents={[
          {
            title: 'Introduction',
            content: (
              <>
                <Notes
                  notes={[
                    {
                      note: ' Authentication verifies who a user is, while authorization determines what they can access',
                    },
                    {
                      note: 'Authentication - It answers the question, "Are you who you claim to be?"',
                    },
                  ]}
                  specialNotes
                />
              </>
            ),
          },
          {
            title: 'Methods of Authentication',
            content: (
              <>
                <Typography variant="subtitle1">
                  {'Several methods exist for authenticating users, ranging from simple => complex'}
                </Typography>
                <BoxCardContent>
                  <ul>
                    <li>
                      <Typography>
                        <b>Passwords</b>: The most common method, requiring users to provide a
                        secret password associated with their account
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <b> One-Time Passcodes (OTP)</b>: Time-sensitive codes sent via SMS, email,
                        or authenticator apps, often used for multi-factor authentication (MFA).
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <b>Biometrics</b>: Using unique biological traits like fingerprints, facial
                        recognition, or voiceprints for verification.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <b>Social Authentication</b>: Leveraging existing accounts from social media
                        platforms like Google, Facebook, or Twitter to authenticate user.
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        <b>Certificate-Based Authentication </b>: Using digital certificates to
                        verify the user or device accessing the system.
                      </Typography>
                    </li>
                  </ul>
                </BoxCardContent>
              </>
            ),
          },
          {
            title: 'Authentication Failure Scenarios',
            content: (
              <>
                <Notes
                  notes={[
                    {
                      note: 'Authentication can fail for various reasons',
                      subNotes: [
                        {
                          note: 'Incorrect Credentials: The user enters the wrong password or username.',
                        },
                        {
                          note: 'Account Lockout: After multiple failed login attempts, the account is temporarily locked to prevent brute-force attacks.',
                        },
                        {
                          note: "Compromised Credentials: A malicious actor has obtained the user's credentials and is attempting to access the system.",
                        },
                        {
                          note: "Inactive Account: The user's account has been deactivated due to inactivity or policy reasons.",
                        },
                      ],
                    },
                  ]}
                />
              </>
            ),
          },
          {
            title: 'Definition of Authorization',
            content: (
              <>
                <Notes
                  notes={[
                    {
                      note: 'Determines what an authenticated user is allowed to do within the system.',
                    },
                    {
                      note: 'It answers the question, "What are you allowed to access?"',
                    },
                    {
                      note: 'Authorization is about permissions and access control.',
                    },
                  ]}
                />
              </>
            ),
          },
          {
            title: 'Methods of Authorization',
            content: (
              <>
                <Notes
                  notes={[
                    {
                      note: (
                        <Typography variant="h6">
                          Authorization can be implemented through various mechanisms:
                        </Typography>
                      ),
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <Typography>
                              <b>Role-Based Access Control (RBAC)</b>: Assigning users to specific
                              roles (e.g., administrator, editor, viewer) and granting permissions
                              based on those roles.
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Attribute-Based Access Control (ABAC)</b>: Using attributes of the
                              user, the resource, and the environment to determine access.
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Access Control List (ACL)</b>: Defining specific permissions for
                              each user or group on individual resources.
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Policy-Based Access Control (PBAC)</b>:Defining policies that
                              govern access to resources based on a set of rules.
                            </Typography>
                          ),
                        },
                      ],
                    },
                  ]}
                  specialNotes
                />
              </>
            ),
          },
          {
            title: 'Authorization Failure Scenarios',
            content: (
              <>
                <Notes
                  notes={[
                    {
                      note: (
                        <Typography variant="h6">
                          Authorization can fail even if authentication is successful:
                        </Typography>
                      ),
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <Typography>
                              <b>Insufficient Permissions</b>:{' '}
                              {`The user attempts to access a resource or
                                perform an action for which they don't have the necessary
                                permissions`}
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Role Revocation</b>:{' '}
                              {`The user's role or permissions have been changed, and they no longer have access to a specific resource.`}
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Policy Enforcement</b>:{' '}
                              {`Access control policies are enforced, preventing the user from accessing a resource based on specific conditions.`}
                            </Typography>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </>
            ),
          },
          {
            title: 'Real-World Examples',
            content: (
              <>
                <Notes
                  notes={[
                    {
                      note: <Typography variant="h5">Online Banking:</Typography>,
                      orderedList: true,
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <Typography>
                              Authentication: You enter your username and password to log in to your
                              bank account.
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              {`Authorization: Once logged in, you are authorized to view your account balance, transfer funds (within limits), and pay bills. You are not authorized to access other customers' accounts or change the bank's interest rates.`}
                            </Typography>
                          ),
                        },
                      ],
                    },
                    {
                      note: (
                        <Typography variant="h5">
                          Hospital Electronic Health Records (EHR) System:
                        </Typography>
                      ),
                      orderedList: true,
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <Typography>
                              Authentication: A doctor uses their badge and PIN to log into the EHR
                              system.
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              {`Authorization: The doctor is authorized to view patient records, order tests, and prescribe medications for patients under their care. A nurse might have access to view patient records and administer medications, but not order tests. A billing clerk might only have access to billing information.`}
                            </Typography>
                          ),
                        },
                      ],
                    },
                    {
                      note: (
                        <Typography variant="h5">
                          Hypothetical Example: Smart Home System:
                        </Typography>
                      ),
                      orderedList: true,
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <Typography>
                              Authentication: You use your fingerprint to unlock your smart home.
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              {`Authorization: Once inside, you are authorized to control the lights, temperature, and security system. A guest, authenticated via a temporary code, might only be authorized to control the living room lights and temperature during their visit.`}
                            </Typography>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

AuthVsAuthorization.displayName = 'AuthVsAuthorization';

export default AuthVsAuthorization;
