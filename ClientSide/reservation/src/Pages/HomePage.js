import React from 'react'
import {Box} from '@mui/material'
import { Outlet } from 'react-router-dom'
import DrawerReserve from '../Components/Drawer'

function HomePage() {

    return (
        <>
            <Box>
                <DrawerReserve />
            </Box>
            <Box>
            <Outlet/>
            </Box>
            
      </>
      
  )
}

export default HomePage