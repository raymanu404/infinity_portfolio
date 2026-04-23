import socialAuthPath from '@/assets/app/social_auth.drawio.svg';
import Notes from '@/Shared/Components/Notes/Notes';
import { Typography } from '@mui/material';
import React from 'react';
import MultipleDefContent from '../../Components/MultipleDefContent';

const CommonAuthFlows: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <MultipleDefContent
        contents={[
          {
            title: 'Password-Based Authentication Flow',
            content: (
              <div>
                <Notes
                  notes={[
                    {
                      note: (
                        <Typography variant="h6">
                          Steps in the Password-Based Authentication Flow:
                        </Typography>
                      ),
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <Typography>
                              <b>User Input</b>: The user enters their username/email and password
                              into a form on the frontend application.
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Transmission to Backend</b>:The frontend sends the username/email
                              and password to the backend server, typically via an HTTPS POST
                              request to a /login endpoint
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Backend Verification</b>:The backend receives the credentials. It
                                then performs the following:
                              </Typography>
                              <ol>
                                <li>
                                  Looks up the user in the database using the provided
                                  username/email
                                </li>
                                <li>
                                  {`Retrieves the stored, hashed password associated with that user.
                                  It is crucial to understand that passwords should never be stored
                                  in plain text. We'll dive into password hashing in the next
                                  module.`}
                                </li>
                                <li>
                                  {
                                    'Hashes the provided password using the same algorithm and salt used when the password was initially created (during registration)'
                                  }
                                </li>
                                <li>
                                  Compares the newly hashed password with the stored hashed
                                  password.
                                </li>
                              </ol>
                            </>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Authentication Decision</b>:
                              {` If the hashed passwords match, the
                              user is authenticated. If they don't match, the authentication fails,
                              and an error message is returned to the frontend.`}
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Session Establishment (on success)</b>: If the authentication is
                                successful, the backend creates a session for the user. This often
                                involves:
                              </Typography>

                              <ol>
                                <li>Generating a unique session identifier.</li>
                                <li>
                                  Storing the session identifier and user information (e.g., user
                                  ID, username) in a server-side store (e.g., in-memory, database,
                                  Redis)
                                </li>
                                <li>
                                  Sending the session identifier back to the frontend, typically as
                                  a cookie.
                                </li>
                              </ol>
                            </>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Cookie Storage (on frontend)</b>: The frontend (browser) stores the
                              session identifier (the cookie). This cookie is automatically included
                              in subsequent requests to the same domain
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <>
                              {' '}
                              <Typography>
                                <b>Subsequent Requests</b>:The backend receives the request with the
                                cookie. It then:
                              </Typography>
                              <ol>
                                <li>Looks up the session identifier in its session store.</li>
                                <li>
                                  {`If the session identifier is found and valid (e.g., not expired), the backend knows that the user is authenticated and retrieves the user's information associated with the session`}
                                </li>
                                <li>
                                  {`The backend can then use the user's information to authorize access to resources or perform actions on behalf of the user.`}
                                </li>
                              </ol>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Logout</b>: When the user logs out, the frontend sends a request
                                to the backend (e.g., a DELETE request to a /logout endpoint). The
                                backend then invalidates the session by:
                              </Typography>
                              <ol>
                                <li>Removing the session identifier from the session store.</li>
                                <li>
                                  Instructing the frontend to delete the session cookie (usually by
                                  setting an expiration date in the past).
                                </li>
                              </ol>
                            </>
                          ),
                        },
                      ],
                    },
                  ]}
                  specialNotes
                />
              </div>
            ),
          },
          {
            title: 'Token-Based Authentication Flow (Specifically JWT)',
            content: (
              <>
                <Notes
                  notes={[
                    {
                      note: (
                        <Typography variant="h6">
                          Steps in the Token-Based Authentication Flow (JWT):
                        </Typography>
                      ),
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <Typography>
                              <b>User Input</b>: The user enters their username/email and password
                              into a form on the frontend application.
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Transmission to Backend</b> The frontend sends the username/email
                              and password to the backend server, typically via an HTTPS POST
                              request to a /login endpoint.
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Backend Verification</b>: The backend receives the credentials
                                and verifies them against the stored user data (similar to
                                password-based authentication).
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>JWT Creation (on success)</b>:
                                {` If the authentication is successful, the backend creates a JWT. This involves:`}
                              </Typography>
                              <ol>
                                <li>
                                  <Typography>
                                    <b>JWT Creation (on success)</b>:
                                    {` If the authentication is successful, the backend creates a JWT. This involves:`}
                                  </Typography>
                                </li>
                                <li>{`Packaging this information into a JSON object called the "payload".`}</li>
                                <li>{`Signing the payload using a secret key (known only to the backend) and a hashing algorithm. This creates the JWT.`}</li>
                              </ol>
                            </>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>JWT Transmission to Frontend</b>:The backend sends the JWT back to
                              the frontend in the response body (usually as a JSON object).
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>JWT Storage (on frontend)</b>: The frontend stores the JWT.
                                Common storage locations include:
                              </Typography>

                              <ol>
                                <li>localStorage: A browser API for storing data persistently.</li>
                                <li>Cookies: Small text files stored by the browser.</li>
                              </ol>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Subsequent Requests</b>
                                {`: For every subsequent request the user makes to the application, the frontend includes the JWT in the Authorization header of the HTTP request. The header typically looks like this: Authorization: Bearer <JWT>.`}
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>JWT Validation (on backend)</b>:The backend receives the request
                                with the JWT in the Authorization header. It then:
                              </Typography>
                              <ol>
                                <li>Removing the session identifier from the session store.</li>
                                <li>
                                  {`Verifies the JWT's signature using the same secret key used to sign it. This ensures that the JWT hasn't been tampered with.`}
                                </li>
                                <li>
                                  {`If the signature is valid, the backend extracts the user information from the JWT's payload.`}
                                </li>
                              </ol>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Authentication/Authorization</b>
                                {`: The backend uses the user information from the JWT to authenticate the user and authorize access to resources.`}
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Logout</b>
                                {`:: Logout with JWTs is typically handled on the frontend by simply deleting the stored JWT. Since the backend doesn't maintain a session store, there's nothing to invalidate on the server-side.`}
                              </Typography>
                            </>
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
            title: 'Social Authentication Flow (OAuth 2.0)',
            content: (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexDirection: 'column',
                }}
              >
                <Notes
                  notes={[
                    {
                      note: (
                        <Typography variant="h6">
                          Steps in the Social Authentication Flow (OAuth 2.0):
                        </Typography>
                      ),
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <Typography>
                              <b>Initiate Authentication</b>:
                              {` The user clicks a "Login with [Provider]" button on the frontend application (e.g., "Login with Google")`}
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Redirect to Authorization Server</b>:Redirect to Authorization
                                Server:
                              </Typography>
                              <ul>
                                <li>
                                  <b>client_id</b>
                                  {`: Your application's identifier with the provider.`}
                                </li>
                                <li>
                                  <b>redirect_uri</b>
                                  {`: The URL on your application where the provider should redirect the user after they authenticate`}
                                </li>
                                <li>
                                  <b>response_type</b>
                                  {`: Specifies the type of response expected (typically code for the authorization code flow).`}
                                </li>
                                <li>
                                  <b>scope</b>
                                  {`: Specifies the permissions your application is requesting (e.g., access to the user's email address, profile information).`}
                                </li>
                              </ul>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>{`User Authentication (on Provider's Site)`}</b>
                                {`: The user is prompted to log in to their account with the social authentication provider (if they're not already logged in).`}
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Consent Granting</b>:
                                {`After logging in, the user is presented with a consent screen that asks them to authorize your application to access the requested information (specified in the scope).`}
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Redirect Back to Application</b>:
                              {`If the user grants consent, the authorization server redirects the user's browser back to your application's redirect_uri. This redirect includes an authorization_code in the query parameters.`}
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Authorization Code Exchange</b>
                                {` The backend of your application receives the authorization code. It then sends a request to the provider's token endpoint, exchanging the authorization code for an access token and (optionally) a refresh token. This request includes:`}
                              </Typography>

                              <ol>
                                <li>
                                  <b>client_id</b>
                                  {`: Your application's identifier.`}
                                </li>
                                <li>
                                  <b>client_secret</b>
                                  {`: A secret key known only to your application and the provider.`}
                                </li>
                                <li>
                                  <b>grant_type</b>
                                  {`: Specifies the type of grant being used (typically authorization_code)`}
                                </li>
                                <li>
                                  <b>code</b>
                                  {`: The authorization code received in the previous step.`}
                                </li>
                                <li>
                                  <b>redirect_uri</b>
                                  {`: The same redirect URI used in the initial authorization request.`}
                                </li>
                              </ol>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Token Retrieval</b>
                                {`:The provider's token endpoint validates the request and, if valid, returns an access token (and optionally a refresh token) to your backend.`}
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>User Information Retrieval</b>
                                {`: Your backend uses the access token to make a request to the provider's API to retrieve the user's information (e.g., email address, profile information).`}
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>User Provisioning/Login</b>
                                {`:Your backend receives the user's information from the provider. It then either:`}
                              </Typography>
                              <ol>
                                <li>{`Your backend receives the user's information from the provider. It then either:`}</li>
                                <li>
                                  {`Logs in an existing user account if the information from the provider matches an existing user.`}
                                </li>
                              </ol>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Session Establishment</b>
                                {`: Your backend creates a session for the user (either using traditional session-based authentication or token-based authentication with JWTs) and sends the session identifier or JWT back to the frontend.`}
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Subsequent Requests</b>
                                {`:The frontend uses the session identifier or JWT to authenticate subsequent requests to your application.`}
                              </Typography>
                            </>
                          ),
                        },
                      ],
                    },
                  ]}
                  specialNotes
                />
                <img src={socialAuthPath} alt="Social auth" />
              </div>
            ),
          },
          {
            title: 'Choosing the Right Authentication Flow',
            content: (
              <>
                <Notes
                  notes={[
                    {
                      note: (
                        <Typography variant="h6">
                          The choice of authentication flow depends on several factors, including:
                        </Typography>
                      ),
                      hideList: true,
                      subNotes: [
                        {
                          note: (
                            <Typography>
                              <b>Security Requirements</b> How sensitive is the data being
                              protected?
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>User Experience</b> How important is it to provide a seamless login
                              experience?
                            </Typography>
                          ),
                        },
                        {
                          note: (
                            <>
                              <Typography>
                                <b>Application Architecture</b>:s it a traditional web application,
                                a single-page application, a mobile application, or a microservices
                                architecture?
                              </Typography>
                            </>
                          ),
                        },
                        {
                          note: (
                            <Typography>
                              <b>Integration with Third-Party Services:</b> Does the application
                              need to integrate with social authentication providers or other
                              third-party services?
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
CommonAuthFlows.displayName = 'CommonAuthFlows';

export default CommonAuthFlows;
