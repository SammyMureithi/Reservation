import { Button } from '@mui/material'
import React, { useState } from 'react'
import ReservationTable from '../Components/ReservationTable'

function IndexPage() {
    const [date, setDate] = useState( new Date() );
    function handleYesterday(numDayrs,date= new Date()) {
        date.setDate( date.getDate() - numDayrs );
        setDate( date );
    }
    function handleTommorow(numDayrs,date= new Date()) {
        date.setDate( date.getDate() + numDayrs );
        setDate( date );
    }
    function handleToday() {
        
        setDate(new Date());
    }
  return (
      <div className='indexPageDisplay'>
          <div className='btnIndexPage'>
          <Button variant='contained' onClick={()=>handleYesterday(1)}>Yesterday</Button>
          <Button variant='contained' onClick={()=>handleToday()}>Today</Button>
          <Button variant='contained' onClick={()=>handleTommorow(1)} >Tomorrow</Button>
          <div>
              {`Reservation as at ${date.toDateString()}`}
          </div>
          </div>
         
         
          <ReservationTable/>
    </div>
  )
}

export default IndexPage