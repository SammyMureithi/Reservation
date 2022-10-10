import React, { useEffect } from 'react'

function ReservationTable() {
    useEffect( () => {
        fetch( "http://localhost:5001" )
            .then( res => res.json() )
            .then( res => console.log( res ) )
            .catch( error => console.log( error ) )
    },[])
  return (
    <div>ReservationTable</div>
  )
}

export default ReservationTable