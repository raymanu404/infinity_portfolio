import { theme } from '@/theme';
import { Box, Link, SxProps, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { LEARNING_SECTIONS } from './constants';

const isActive: SxProps = {
  color: theme.custom.specialPalette?.variantMain,
  backgroundColor: theme.custom.specialPalette?.variant[500],
};

const SideNavigation: React.FC = () => {
  const { hash } = useLocation();
  const isActiveLinkSx = (elemId: string) => (hash.includes(elemId) ? isActive : {});

  return (
    <Box
      sx={{
        backgroundColor: theme.custom.specialPalette?.variant[200],
        flexGrow: 0,
        alignSelf: 'baseline',
        position: { xs: 'static', sm: 'sticky' },
        top: `calc(40px + ${theme.spacing(4)})`,
        flexBasis: { xs: '100%', sm: '250px' },
        width: { xs: '100%', sm: 'auto' },
        boxSizing: 'border-box',
        padding: `${theme.spacing(2)}`,
        margin: 0,
        display: 'flex',
        flexDirection: { xs: 'row', sm: 'column' },
        overflowX: 'auto',
        gap: { xs: theme.spacing(2), sm: 0 },
        // Hide scrollbar on mobile
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      {LEARNING_SECTIONS.map(({ elementId, title }) => (
        <Link
          key={elementId}
          href={`#${elementId}`}
          underline="none"
          sx={{ color: `${theme.custom.specialPalette?.variantSecondaryDark}` }}
        >
          <Typography
            sx={{
              padding: { xs: `${theme.spacing(1)} ${theme.spacing(2)}`, sm: `${theme.spacing(0.5)} ${theme.spacing(2)}` },
              whiteSpace: 'nowrap',
              borderRadius: { xs: '16px', sm: 0 },
              ...isActiveLinkSx(elementId),
            }}
          >
            {title}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

SideNavigation.displayName = 'SideNavigation';

export default SideNavigation;
