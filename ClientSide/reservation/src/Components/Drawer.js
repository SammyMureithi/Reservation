import { Drawer } from '@mui/material'
import { Typography,List ,ListItem} from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function DrawerReserve() {
    const drawerWidth = 240;
    return (
        <div  className='drawer'>
            <Drawer
               
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant='permanent'
                anchor='left'>
                <Typography variant="h6">Periodic Table</Typography>
                <List>
                    <ListItem className='drawerItemList'>
                        <DashboardIcon />
                        <NavLink to="/">DashBoard</NavLink>
                    </ListItem>
                    <ListItem className='drawerItemList'>
                        <SearchIcon />
                        <NavLink to="search">Search</NavLink>
                    </ListItem>
              <ListItem className='drawerItemList'>
                  <AddIcon />
                  <NavLink to="newReservation">New Researvation</NavLink>
              </ListItem>
              <ListItem className='drawerItemList'>
                  <ContentCopyIcon />
                  <NavLink to="newTable">New Table</NavLink>
             </ListItem>
          </List>
            </Drawer>
            </div>
  )
}

export default DrawerReserve