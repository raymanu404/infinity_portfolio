import { theme } from '@/theme';
import { Box, Container, styled } from '@mui/material';

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxCardContent = styled(Box)`
  padding: 0 ${theme.spacing(2)};
`;

const FlexWithGapBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

const SpaceBetweenRowBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing(2)};
  justify-content: space-between;
  align-items: center;
`;
export { BoxCardContent, CenteredContainer, FlexWithGapBox, SpaceBetweenRowBox };
