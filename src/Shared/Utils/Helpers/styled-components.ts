import { theme } from '@/theme';
import { Box, Container, styled } from '@mui/material';

const CenteredBox = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxCardContent = styled(Box)`
  padding: ${theme.spacing(2)} ${theme.spacing(2.5)};
`;

export { CenteredBox, BoxCardContent };
