import { TimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import { useTimePickerComponent } from '../hooks/useTimePickerComponent';

export const TimePickerComponent = ({ handleValue }) => {

  const {valor, handleOnChange} = useTimePickerComponent()

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          onChange={(newValue) => {    
            handleValue(handleOnChange(newValue))
          }}
        />
      </LocalizationProvider>
    </>
  )
}
