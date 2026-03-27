import Notes from '@/Shared/Components/Notes/Notes';
import { Button, TextField } from '@mui/material';
import React, { useId } from 'react';

const PasswordFieldExample: React.FC = () => {
  const passwordHintId = useId();

  return (
    <>
      <label>
        Password
        <TextField type="password" aria-describedby={passwordHintId} variant="standard" />
      </label>
      <p id={passwordHintId}>The password should contain at least 18 characters</p>
    </>
  );
};

const BasicForm: React.FC = () => {
  const id = useId();

  const firstNameId = `${id} - firstName`;
  const lastNameId = `${id} - lastName`;
  return (
    <form
      style={{
        display: 'flex',
        gap: '12px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '20px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '12px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'left',
        }}
      >
        <div>
          <label htmlFor={firstNameId}>FirstName</label>
          <TextField id={firstNameId} variant="standard" />
        </div>
        <div>
          <label htmlFor={lastNameId}>LastName</label>
          <TextField id={lastNameId} variant="standard" />
        </div>
      </div>

      <div>
        <h2>Choose password</h2>
        <PasswordFieldExample />
        <h2>Confirm password</h2>
        <PasswordFieldExample />
      </div>

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

const BasicExample: React.FC = () => {
  return (
    <div>
      <h1>BasicExample useId</h1>
      <Notes
        specialNotes={true}
        notes={[
          {
            note: `even if PasswordFieldExample appears multiple times on the screen, the generated IDs won't clash`,
          },
          {
            note: `This lets you avoid calling useId for every single element that needs a unique ID, you can call useId to generate a shared prefix for them`,
          },
        ]}
      />
      <BasicForm />
    </div>
  );
};

BasicExample.displayName = 'BasicExample';

export default BasicExample;
