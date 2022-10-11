import { TextField } from '@mui/material';
import React, { useState } from 'react'
import ReservationTable from '../Components/ReservationTable'

function Search() {
  const [searchString, setSearchString] = useState( "" );
  function handleSearchChange( e ) {
    setSearchString( e.target.value );
  }
  return (
    <div className='searchDisplay'>
      <div className='searchInput'>
      <TextField label="Phone Number"
        variant="outlined"
        width='fit-content'
        name='search' 
        onChange={handleSearchChange}
        type="text" />
      </div>
      <ReservationTable searchString={searchString}/>
    </div>
    
  )
}

export default Search