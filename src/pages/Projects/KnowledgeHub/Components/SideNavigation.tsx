import { BoxCardContent } from '@/Shared/Utils/Helpers/styled-components';
import { theme } from '@/theme';
import { Box, Link, SxProps, Typography } from '@mui/material';
import React from 'react';
import { LEARNING_SECTIONS } from '../constants';
import { useLocation } from 'react-router-dom';

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
        position: 'sticky',
        top: `calc(40px + ${theme.spacing(4)})`,
        flexBasis: '20%',
        padding: `${theme.spacing(2)} 0`,
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
              padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
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
