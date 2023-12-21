import React from 'react'
import { Spinner } from './Spinner'
import "../styles/SpinnerInDisplay.css";
import { useSelector } from 'react-redux';
import { SpinnerSlice } from '../types/interface';


export const SpinnerInDisplay = () => {
  const { stateSpinner } = useSelector((state:SpinnerSlice) => state.spinner)
  return (
  <div className={(stateSpinner.stateSpinnerInDisplay) ? 'container-display-spinner acive-ds' : 'container-display-spinner inacive-ds'}>
    <div className='container-spinner-display'>
      <Spinner 
        active={true}
      />
    </div>
  </div>
  )
}