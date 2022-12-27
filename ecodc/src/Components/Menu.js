import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    console.log(anchorEl);
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };
  const handleClose = (event) => {
    console.log("handleClose fires")
    setAnchorEl(null);
  };

  const HandleRecycle = (event) =>{
    window.location.href = "EcoDC/Recycle"
  }

  return (
    <div id="menu-div"
    >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
       >
        Resources
      </Button>
      <div id = "temp">
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}

          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={HandleRecycle}>Recycling</MenuItem>
          <MenuItem onClick={handleClose}>Empty</MenuItem>
          <MenuItem onClick={handleClose}>Empty</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
