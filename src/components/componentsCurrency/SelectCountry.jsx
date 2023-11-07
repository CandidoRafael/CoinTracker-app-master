import { Autocomplete, Grid, Skeleton, TextField } from '@mui/material'
import React from 'react'
import useAxios from '../../hooks/useAxios'
import useFilterCountries from '../../hooks/useFilterCountries'


const SelectCountry = ({value, setValue, label}) => {

  const url = 'https://restcountries.com/v3.1/all'

  const { loaded, error } = useAxios(url)
  const { dataCountries }  = useFilterCountries()
  
  if(loaded) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant='rounded' height={60} />
      </Grid>
    )
  }

  if(error) {
    return 'Something went wrong!'
  }
  
  return (
    <Grid item xs={12} md={3}>
        <Autocomplete
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            options={dataCountries}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    </Grid>
  )
}

export default SelectCountry