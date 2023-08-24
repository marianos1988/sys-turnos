import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



export const DatePickerComponent = ({ handleValue, value }) => {



  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker          
          onChange={(newValue)=>{
            handleValue(newValue);
          }}
          value={value}
        />
      </LocalizationProvider>
    </>
  )
}
