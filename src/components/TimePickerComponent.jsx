import { TimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'


export const TimePickerComponent = ({ handleValue, value }) => {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          onChange={(newValue) => {    
            handleValue(newValue)
          }}
          value={value}
        />
      </LocalizationProvider>
    </>
  )
}
