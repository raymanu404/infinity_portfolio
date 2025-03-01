import { Box, Typography } from '@mui/material'
import { MoveI } from '../utils/interfaces'
import React from 'react'

interface PropsI {
  value: MoveI
  onClickHandler?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>, value: MoveI) => void
  currentValueOnBoard: string
}

const TicTacToeBox = (props: PropsI) => {
  const { value, onClickHandler, currentValueOnBoard } = props
  return (
    <Box
      sx={{
        border: '10px solid #06314B',
        width: '150px',
        height: '150px',
        ':hover': {
          cursor: 'pointer',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={(ev) => onClickHandler?.(ev, value)}
    >
      <Typography variant="h1">{currentValueOnBoard}</Typography>
    </Box>
  )
}

export default TicTacToeBox
