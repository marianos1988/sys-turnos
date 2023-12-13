import "../styles/Spinner.css";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type Props = {
  active: boolean
}

export const Spinner = ({ active }:Props) => {
  return (
    <div className={(active) ? `spinner-active` : `spinner-inactive`}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )
}