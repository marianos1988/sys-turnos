import { TimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import { useTimePickerComponent } from '../hooks/useTimePickerComponent';

export const TimePickerComponent = ({ handleValue }) => {

  const {valor, handleOnChange} = useTimePickerComponent()

  const manejarOnChange = (hora) => {
    handleOnChange(hora)

  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          onChange={(newValue) => {
            manejarOnChange(newValue)
            handleValue(valor)
          }}
        />
      </LocalizationProvider>
    </>
  )
}
