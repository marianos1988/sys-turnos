import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
// value={dayjs('2022-04-17')}


export const DatePickerComponent = ({ handleValue, value, disabled }) => {



  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker          
          onChange={(newValue)=>{
            handleValue(newValue);
          }}
          value={value}
          disabled={disabled}
          
        />
      </LocalizationProvider>
    </>
  )
}


