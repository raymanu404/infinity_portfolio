import { Box, Grid } from '@mui/material'
import CardContainer from '../Components/CardContainer'
import { useNavigate } from 'react-router-dom'
import { PROJECTS_CONST } from './constants'
import { theme } from '@/theme'

const ProjectsContainer = () => {
  const navigate = useNavigate()

  return (
    <Box
      width={'100%'}
      height={'100%'}
      sx={{
        backgroundColor: theme.palette.primary.light,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        left: '0',
      }}
    >
      <Box
        sx={{
          marginTop: '50px',
          marginLeft: '20px',
          padding: '10px 50px',
        }}
      >
        <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
          {PROJECTS_CONST.map((project) => {
            return (
              <Grid item key={project.projectId}>
                <CardContainer
                  title={project.title}
                  description={project.description ?? ''}
                  onClickHandler={() => navigate(`${project.route}`)}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default ProjectsContainer
