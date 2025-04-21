import { Box, Grid } from '@mui/material';
import { MonsterI } from '../interfaces';
import './cardList.style.css';
import MonsterCard from './MonsterCard';
import { NoResult } from '@/Shared/Components';

interface PropsI {
  monsters: MonsterI[];
}
const CardList = (props: PropsI) => {
  const { monsters } = props;

  return (
    <Grid container gap={'1.25rem'} sx={{ padding: '30px', justifyContent: 'center' }}>
      {monsters.length === 0 && <NoResult />}
      {monsters &&
        monsters.map((el) => {
          return (
            <Box key={el.id}>
              <Grid item xs={6}>
                <MonsterCard monster={el} />
              </Grid>
            </Box>
          );
        })}
    </Grid>
  );
};

export default CardList;
