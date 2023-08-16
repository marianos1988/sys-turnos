import {  useState } from 'react'

export const useDatePickerComponent = () => {


    const handleOnChange = (newDate) => {
      const { $d } = newDate;
      return $d

    }

  return {

    handleOnChange,


  }
}
