import { Button, TextField } from '@mui/material'
import React from 'react'

function NewTable() {
  return (
    <form className='formReservation'>
       <label for="firstName">Table Name</label><br></br>
     <TextField label="Table Name"
        variant="outlined"
        width='fit-content'
        name='firstName' 
       // onChange={handleSearchChange}
        type="text" />
      <label for="firstName">Table Capacity</label><br></br>
      <TextField label="Table Capacity"
        variant="outlined"
        width='fit-content'
        name='firstName' 
       // onChange={handleSearchChange}
        type="text" />
        <Button variant='contained' type='submit'>Submit</Button>
    </form>
  )
}

export default NewTable