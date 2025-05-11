import { theme } from '@/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ContentI } from '../KnowledgeHub/interfaces';

interface SectionContentProps extends PropsWithChildren {
  content: ContentI;
  disableAutoOpen?: boolean;
  brutalClose?: boolean;
}

const SectionContent: React.FC<SectionContentProps> = ({
  content,
  disableAutoOpen = true,
  children,
  brutalClose,
}) => {
  const { elementId, title, children: parentChildren, subTitle } = content;
  const { hash } = useLocation();
  const [isOpen, setIsOpen] = useState(hash.includes(elementId));

  useEffect(() => {
    if (typeof brutalClose === 'boolean') {
      setIsOpen(!brutalClose);
    }
  }, [brutalClose]);

  useEffect(() => {
    if (!disableAutoOpen) {
      const value = hash.includes(elementId);
      if (value) {
        setIsOpen(hash.includes(elementId));
      }
    }
  }, [hash]);

  return (
    <Box id={elementId}>
      <Accordion
        expanded={isOpen}
        onChange={() => {
          setIsOpen(prev => !prev);
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${title}-content`}
          sx={{ backgroundColor: theme.custom.specialPalette?.variant[300] }}
        >
          <Stack
            direction={'row'}
            spacing={4}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography variant="body1">{title}</Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.custom.specialPalette?.variantSecondaryLight,
                letterSpacing: '2px',
              }}
            >
              {subTitle}
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: theme.custom.specialPalette?.variant[200] }}>
          {parentChildren ?? children}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

SectionContent.displayName = 'SectionContent';

export default SectionContent;
