import React, { useState } from 'react';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import PetsIcon from '@mui/icons-material/Pets';
import { useNavigate } from 'react-router-dom';

export default function Drawern() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [drawerColor, setDrawerColor] = useState('#f0f0f0'); // Set the initial drawer color

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => () => {
    navigate(path);
    setOpen(false);
  };

  const handleColorChange = (newColor) => {
    setDrawerColor(newColor);
  };

  const DrawerList = (
    <Box sx={{ width: 250, backgroundColor: drawerColor }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Avatar
          alt="Profile Image"
          src="path_to_your_image.jpg"
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      // as
      <List>
        {[
          { text: 'Perfil', icon: <PersonIcon />, path: '/perfil' },
          { text: 'Mascota', icon: <PetsIcon />, path: '/mascota' }
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={handleNavigation(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <ListTwoToneIcon className='Menu_icon' />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}