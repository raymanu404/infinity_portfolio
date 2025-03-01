import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { MonsterI } from '../interfaces'
import React from 'react'

interface PropsI {
  monster: MonsterI
}

const MonsterCard = (props: PropsI) => {
  const { id, name, email = 'No email provided' } = props.monster

  return (
    <Card sx={{ width: '250px', height: '300px', borderRadius: '10px', cursor: 'pointer' }} className="card-container">
      <CardMedia component="img" src={`https://robohash.org/${id}?set=set2`} alt={`monster-${name}`} />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">{email}</Typography>
      </CardContent>
    </Card>
  )
}

export default MonsterCard
