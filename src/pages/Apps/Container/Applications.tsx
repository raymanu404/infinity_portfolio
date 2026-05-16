import CardContainer from '@/pages/Projects/Components/CardContainer';
import { FullCenteredBox } from '@/Shared/Utils/Helpers/styled-components';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { APPLICATIONS_CONTENTS } from './constants';

export const Applications = () => {
  const navigate = useNavigate();

  return (
    <FullCenteredBox>
      <Box>
        <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
          {APPLICATIONS_CONTENTS.map(({ projectId, route, title, description }) => {
            return (
              <Grid item key={projectId}>
                <CardContainer
                  title={title}
                  description={description ?? ''}
                  onClickHandler={() => navigate(`${route}`)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </FullCenteredBox>
  );
};
