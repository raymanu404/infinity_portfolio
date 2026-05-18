import {
  useAuthStore,
  useAuthStoreLocalStorage,
} from '@/pages/Apps/TaskManagerApp/store/authStore';
import { Logout } from '@mui/icons-material';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import React, { startTransition } from 'react';

interface UserMenuProps {
  handleClose: () => void;
  anchorEl: HTMLElement | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ handleClose, anchorEl }) => {
  const { user, clear } = useAuthStoreLocalStorage();
  const { user: localUser, clear: clearLocal } = useAuthStore();

  const logoutHandler = () => {
    startTransition(() => {
      if (user) {
        clear();
      }

      if (localUser) {
        clearLocal();
      }
    });
  };
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={Boolean(anchorEl)}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleClose}>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={logoutHandler}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

UserMenu.displayName = 'UserMenu';

export default UserMenu;
