import { TextField, TextFieldProps } from '@mui/material'
import React, { HTMLInputTypeAttribute } from 'react'

interface CustomPropsI {
  value?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
}

type PropsI = CustomPropsI & TextFieldProps

const CustomTextField = (props: PropsI) => {
  const { value, placeholder, type, ...rest } = props
  return (
    <>
      <TextField
        type={type ?? 'text'}
        value={value}
        InputProps={{ autoComplete: 'off', placeholder: placeholder ?? '' }}
        {...rest}
      />
    </>
  )
}

export default CustomTextField
