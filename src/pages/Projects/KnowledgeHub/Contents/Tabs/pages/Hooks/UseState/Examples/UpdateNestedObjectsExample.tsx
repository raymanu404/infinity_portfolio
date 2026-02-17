import { Box } from '@mui/material';
import React from 'react';
import { useImmer } from 'use-immer';

const UpdateNestedObjectsExample: React.FC = () => {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
    },
  });

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.city = draft.name = e.target.value;
    });
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e: React.ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
    </Box>
  );
};

UpdateNestedObjectsExample.displayName = 'UpdateNestedObjectsExample';

export default UpdateNestedObjectsExample;
