import { Stack } from '@mui/material';
import React from 'react';
import SectionContent from '../Components/SectionContent';
import { LEARNING_SECTIONS } from './constants';

const SectionContentList: React.FC = () => {
  return (
    <Stack direction={'column'} spacing={3}>
      {LEARNING_SECTIONS.map(item => (
        <SectionContent content={item} key={item.elementId} />
      ))}
    </Stack>
  );
};

SectionContentList.displayName = 'SectionContentList';

export default SectionContentList;
