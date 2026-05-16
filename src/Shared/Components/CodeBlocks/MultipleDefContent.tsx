import { Divider } from '@mui/material';
import React, { ReactNode } from 'react';

interface Content {
  title: string;
  content: ReactNode;
}

interface MultipleDefContentProps {
  contents: Content[];
}

const MultipleDefContent: React.FC<MultipleDefContentProps> = ({ contents }) => {
  return (
    <div style={{ padding: '0 5px' }}>
      {contents.map(({ content, title }, index) => {
        const isLast = index === contents.length - 1;
        return (
          <div key={`${title}-${index}`} style={{ padding: '0 5px' }}>
            <h3>{title}</h3>
            {content}
            {!isLast && <Divider sx={{ width: '100%', padding: '10px 0' }} />}
          </div>
        );
      })}
    </div>
  );
};

MultipleDefContent.displayName = 'MultipleDefContent';

export default MultipleDefContent;
