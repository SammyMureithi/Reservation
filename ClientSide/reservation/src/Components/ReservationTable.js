import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function ReservationTable({searchString=""}) {
  const [reservation, SetReservation] = useState( null );
  const filterData =reservation!==null? reservation.filter( element => element.phoneNumber.includes( searchString ) ):null;
    useEffect( () => {
      fetch( "http://localhost:5001" )
        .then( res => {
          if ( !res.ok ) {
              console.log("Error Fetching")
          }
          return res;
        } )
            .then( res => res.json() )
          .then( res => {
            console.log( res );
            SetReservation( res )
          } )
            .catch( error => console.log( error ) )
    }, [] )
  const res = reservation !== null ? (
    filterData.map( element => {
      return (
        < tr key={element.id}  className='tBody'>
          <td align='center'>{element.firtName}</td>
          <td align='center'>{ element.lastName}</td>
          <td align='center'>{ element.phoneNumber}</td>
          <td align='center'>{ element.time}</td>
          <td align='center'>{ element.people}</td>
          <td align='center'>{ element.status}</td>
          <td align='center'><Button variant='contained'>Edit</Button></td>
          <td align='center'><Button variant='contained'>Cancel</Button></td>
          <td align='center'><Button variant='contained'>Seat</Button></td>
      </tr >
    )
  })
  ): null;
  return (
    <div className='table'>
      <Typography variant='h5'>Reservations</Typography>
      <table>
      <thead>
        <tr>
          <td align='center'>First</td>
          <td align='center'>Last</td>
          <td align='center'>Mobile Number</td>
          <td align='center'>Time</td>
          <td align='center'>People</td>
          <td align='center'>Status</td>
          <td align='center'>Edit</td>
          <td align='center'>Cancel</td>
          <td align='center'>Seat</td>
        </tr>
      </thead>
      <tbody>
        {res}
      </tbody>
    </table>
    </div>
    
  )
}

export default ReservationTable