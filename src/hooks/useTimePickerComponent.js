import { useState } from 'react'

export const useTimePickerComponent = () => {


  const handleOnChange = (newTime) => {
      const { $d } = newTime;
      return $d
  }
  return {
    handleOnChange,

}
  }

