import React from 'react'
import {Box, Button} from '@mui/material'
import { Outlet } from 'react-router-dom'
import DrawerReserve from '../Components/Drawer'

function HomePage() {
    return (
        <div className='displayHome'>
            <DrawerReserve />
                <Outlet />
      </div>
      
  )
}

export default HomePage