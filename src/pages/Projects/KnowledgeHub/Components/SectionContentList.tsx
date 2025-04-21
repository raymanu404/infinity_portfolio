import { Stack } from '@mui/material';
import React from 'react';
import { LEARNING_SECTIONS } from '../constants';
import SectionContent from './SectionContent';

const SectionContentList: React.FC = () => {
  return (
    <Stack direction={'column'} spacing={3}>
      {LEARNING_SECTIONS.map((item) => (
        <SectionContent content={item} key={item.elementId} />
      ))}
    </Stack>
  );
};

SectionContentList.displayName = 'SectionContentList';

export default SectionContentList;
