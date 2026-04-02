import { FullCenteredBox } from '@/Shared/Utils/Helpers/styled-components';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import CardContainer from './Components/CardContainer';
import { PROJECTS_CONST } from './Container/constants';

const ProjectsContainer = () => {
  const navigate = useNavigate();

  return (
    <FullCenteredBox>
      <Box>
        <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
          {PROJECTS_CONST.map(project => {
            return (
              <Grid item key={project.projectId}>
                <CardContainer
                  title={project.title}
                  description={project.description ?? ''}
                  onClickHandler={() => navigate(`${project.route}`)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </FullCenteredBox>
  );
};

export default ProjectsContainer;
