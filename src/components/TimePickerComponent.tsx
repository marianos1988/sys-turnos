import { TimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'

type Props = {
  handleValue(newValue:any | null): void,
  name: string,
  value: any,
  disabled: boolean
  }

export const TimePickerComponent = ({ handleValue, value, disabled }:Props) => {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          onChange={(newValue) => {    
            handleValue(newValue)
          }}
          value={value}
          disabled= {disabled}
        />
      </LocalizationProvider>
    </>
  )
}
