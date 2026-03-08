import { theme } from '@/theme';
import {
  AppBar,
  Box,
  Dialog,
  dialogClasses,
  DialogProps,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { X } from 'lucide-react';
import React, { PropsWithChildren } from 'react';

interface FullModalProps extends PropsWithChildren, Omit<DialogProps, 'children' | 'open'> {
  isOpen: boolean;
  title: string;
  handleClose: (
    event: React.MouseEvent<HTMLElement>,
    reason?: 'backdropClick' | 'escapeKeyDown',
  ) => void;
}

const FullModal: React.FC<FullModalProps> = ({ title, handleClose, isOpen, children, ...rest }) => {
  const Children = (
    <Box
      sx={{
        padding: `${theme.spacing(3)}`,
        height: '100%',
        maxHeight: '100vh',
      }}
    >
      {children}
    </Box>
  );

  if (!isOpen) {
    return Children;
  }

  return (
    <>
      {isOpen && (
        <Dialog
          fullScreen
          {...rest}
          open={isOpen}
          onClose={handleClose}
          sx={{
            [`& .${dialogClasses.paper}`]: {
              backgroundColor: theme.custom.specialPalette?.variant[200],
            },
          }}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {title}
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={event => handleClose(event)}
                aria-label="close"
              >
                <X />
              </IconButton>
            </Toolbar>
          </AppBar>
          {Children}
        </Dialog>
      )}
    </>
  );
};

FullModal.displayName = 'FullModal';

export default FullModal;
