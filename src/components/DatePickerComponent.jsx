import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useDatePickerComponent } from '../hooks/useDatePickerComponent';


export const DatePickerComponent = ({ value }) => {

  const { handleOnChange, valor} = useDatePickerComponent();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker          
          onChange={(newValue)=>{
            handleOnChange(newValue)
            value(valor);
          }}  
        />
      </LocalizationProvider>
    </>
  )
}
