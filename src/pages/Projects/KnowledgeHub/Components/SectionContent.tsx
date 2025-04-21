import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ContentI } from '../interfaces';
import { useLocation } from 'react-router-dom';

interface SectionContentProps {
  content: ContentI;
}

const SectionContent: React.FC<SectionContentProps> = ({ content }) => {
  const { elementId, title, children, subTitle } = content;
  const { hash } = useLocation();
  const [isOpen, setIsOpen] = useState(hash.includes(elementId));

  useEffect(() => {
    const value = hash.includes(elementId);
    if (value) {
      setIsOpen(hash.includes(elementId));
    }
  }, [hash]);

  return (
    <Box id={elementId}>
      <Accordion
        expanded={isOpen}
        onChange={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${title}-content`}>
          <Stack direction={'row'} spacing={4}>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="subtitle2">{subTitle}</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

SectionContent.displayName = 'SectionContent';

export default SectionContent;
