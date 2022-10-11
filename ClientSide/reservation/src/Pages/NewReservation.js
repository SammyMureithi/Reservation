import { Button, TextField } from '@mui/material'
import React from 'react'

function NewReservation() {
  return (
    <form className='formReservation'>
      <label for="firstName">Name</label><br></br>
     <TextField label="First Name"
        variant="outlined"
        width='fit-content'
        name='firstName' 
       // onChange={handleSearchChange}
        type="text" />
      <label for="firstName">Name</label><br></br>
      <TextField label="Last Name"
        variant="outlined"
        width='fit-content'
        name='firstName' 
       // onChange={handleSearchChange}
        type="text" />
         <label for="firstName">Mobile Number </label><br></br>
      <TextField label="Mobile Number"
        variant="outlined"
        width='fit-content'
        name='firstName' 
       // onChange={handleSearchChange}
        type="text" />
         <label for="firstName">Date</label><br></br>
      <TextField 
        variant="outlined"
        width='fit-content'
        name='firstName' 
       // onChange={handleSearchChange}
        type="date" />
         <label for="firstName">Time</label><br></br>
      <TextField 
        variant="outlined"
        width='fit-content'
        name='firstName' 
       // onChange={handleSearchChange}
        type="time" />
         <label for="firstName">Number of People</label><br></br>
      <TextField  
        variant="outlined"
        width='fit-content'
        name='firstName' 
       // onChange={handleSearchChange}
        type="number" />
      <Button variant='contained' type='submit'>Submit</Button>
    </form>
  )
}

export default NewReservation