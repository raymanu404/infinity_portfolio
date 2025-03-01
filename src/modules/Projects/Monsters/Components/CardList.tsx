import { Box, Grid } from '@mui/material'
import { MonsterI } from '../interfaces'
import './cardList.style.css'
import MonsterCard from './MonsterCard'
import NoResult from '@/modules/NotFound/NoResult'
import React from 'react'
interface PropsI {
  monsters: MonsterI[]
}
const CardList = (props: PropsI) => {
  const { monsters } = props

  return (
    <Grid container gap={'1.25rem'} sx={{ padding: '30px', justifyContent: 'center', height: '200vh' }}>
      {monsters.length === 0 && <NoResult />}
      {monsters &&
        monsters.map((el) => {
          return (
            <Box key={el.id}>
              <Grid item xs={6}>
                <MonsterCard monster={el} />
              </Grid>
            </Box>
          )
        })}
    </Grid>
  )
}

export default CardList
