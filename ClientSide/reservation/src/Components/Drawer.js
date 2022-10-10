import { Drawer } from '@mui/material'
import { Typography,List ,ListItem} from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function DrawerReserve() {
   
  return (
      <Drawer
          variant='permanent'
          open="true"
          anchor='left'>
          <Typography variant="h6">Periodic Table</Typography>
          <List>
              <ListItem>
                  <DashboardIcon/>
              <NavLink to="/">DashBoard</NavLink>
              </ListItem>
              <ListItem>
                  <SearchIcon />
                  <NavLink to="search">Search</NavLink>
              </ListItem>
              <ListItem>
                  <AddIcon />
                  <NavLink to="newReservation">New Researvation</NavLink>
              </ListItem>
              <ListItem>
                  <ContentCopyIcon />
                  <NavLink to="newTable">New Table</NavLink>
             </ListItem>
          </List>
    </Drawer>
  )
}

export default DrawerReserve