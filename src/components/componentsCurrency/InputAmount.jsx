import React from 'react';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { useAppStore } from '../../store';

export const InputAmount = () => {

  const { firstAmount, setFirstAmount } = useAppStore()

  return (
    <Grid item xs={12} md>
      <TextField
        value={firstAmount === 0 ? '' : firstAmount}
        onChange={(e) => setFirstAmount(e.target.value)}
        label='Valor'
        fullWidth
        InputProps={{
          type: 'number',
          startAdornment: (<InputAdornment position="start">$</InputAdornment>)
        }}
      />
    </Grid>
  );
}