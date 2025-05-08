import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface PagePanelNotesProps {
  notes: string | string[];
}

const renderNotes = (notes: string | string[]): ReactNode => {
  if (typeof notes === 'string') {
    return <Typography>{notes}</Typography>;
  }

  if (notes.length > 0) {
    return (
      <List dense>
        {notes.map((x, index) => (
          <ListItem key={index}>
            <ListItemText primary={x} />
          </ListItem>
        ))}
      </List>
    );
  }
};

const PagePanelNotes: React.FC<PagePanelNotesProps> = ({ notes }) => {
  return (
    <div>
      <Box sx={{ width: '94%', minHeight: '100px' }}>{renderNotes(notes)}</Box>
    </div>
  );
};

PagePanelNotes.displayName = 'PagePanelNotes';

export default PagePanelNotes;
