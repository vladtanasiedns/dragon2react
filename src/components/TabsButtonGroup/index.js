import React from 'react';
import { Button, ButtonGroup, MenuItem, MenuList, Popover } from '@mui/material';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TabsButtonGroup = ({ buttons }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const NO_OF_BUTTONS = 6;

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // TODO: Make buttons react router links to each respective component
  // TODO: Make components lazy load
  // TODO: Create a components map and only build links for the components that come as a response on the user session

  return (
    <>
      <ButtonGroup sx={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {buttons.slice(0, NO_OF_BUTTONS).map((button, index) => (
          <Button key={index} variant="contained" color="primary" size='small' component={Link} to='/'>
              {button}    
          </Button>
        ))}
        <Button variant="outlined" size='small' color="primary" onClick={handleButtonClick}>
          <MoreVertIcon />
        </Button>
      </ButtonGroup>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuList>
          {buttons.slice(NO_OF_BUTTONS).map((button, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              <Button color="primary" size='small' component={Link} to='/ach'>
                {button}
              </Button>
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
};

export default TabsButtonGroup;