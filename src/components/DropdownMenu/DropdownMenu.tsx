import React, { FunctionComponent, SyntheticEvent, useState } from 'react';

import MuiMenu from '@material-ui/core/Menu';
import MuiMenuItem from '@material-ui/core/MenuItem';

type MenuItem = {
  label: string;
  value: string;
};

type Props = {
  items: MenuItem[];
  onItemSelect: (value: MenuItem) => void;
};

const DropdownMenu: FunctionComponent<Props> = (props) => {
  const { items, onItemSelect, children } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: SyntheticEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (item: MenuItem) => {
    onItemSelect(item);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleClick} role="menu" tabIndex={0}>
        {children}
      </div>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {items.map((item) => (
          <MuiMenuItem key={item.value} onClick={() => handleSelect(item)}>
            {item.label}
          </MuiMenuItem>
        ))}
      </MuiMenu>
    </>
  );
};

export default DropdownMenu;
