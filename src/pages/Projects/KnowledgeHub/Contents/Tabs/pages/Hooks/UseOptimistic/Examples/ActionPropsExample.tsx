import Notes from '@/Shared/Components/Notes/Notes';
import { TextField } from '@mui/material';
import React, { startTransition, useOptimistic, useState } from 'react';

const updateNameFake = async (name: string) => {
  return await new Promise<{ name: string }>(resolve => {
    setTimeout(() => {
      resolve({ name: name });
    }, 1000);
  });
};

const EditNameExample: React.FC<{ name: string; action: (name: string) => void }> = ({
  action,
  name,
}) => {
  const [optimisticName, setOptimisticName] = useOptimistic(name);

  const submitAction = async (formData: FormData) => {
    const newName = formData.get('name');

    setOptimisticName(`${newName}`);

    const updatedName = await updateNameFake(`${newName}`);

    startTransition(() => {
      action(updatedName.name);
    });
  };

  return (
    <div>
      <Notes
        specialNotes={true}
        notes={[
          {
            note: `Since submitAction is named with “Action”, you know it's already called inside startTransition.`,
          },
        ]}
      />
      <h2>ActionPropsExample</h2>
      <form action={submitAction}>
        <h3>Optimistic name is {optimisticName}</h3>
        <h3>Updated state name {name}</h3>

        <TextField name="name" id="name" disabled={name !== optimisticName} />
      </form>
    </div>
  );
};

const ActionPropsExample: React.FC = () => {
  const [name, setName] = useState('Manu');

  return <EditNameExample action={setName} name={name} />;
};

ActionPropsExample.displayName = 'ActionPropsExample';

export default ActionPropsExample;
