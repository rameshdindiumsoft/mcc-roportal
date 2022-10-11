import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const ITEM_HEIGHT = 48;

type MoreDropdownProps = {
  children: React.ReactNode,
  anchorEl: any,
  handleClick: any
}

export default function MoreDropdown({children, anchorEl, handleClick}: MoreDropdownProps) {
  const open = Boolean(anchorEl);

  return (     
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 7.5,
            width: '20ch',
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            boxShadow: "0px 3px 6px #00000029 !important",
            opacity: 1
          },
        }}
      >
        {children}
      </Menu>
  );
}
