import './Modal.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function BasicModal({
  isOpen,
  children,
  buttonLabel = 'Example',
}) {
  const [open, setOpen] = React.useState(isOpen);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-box">
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: '#050505',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>{children}</Box>

        <Button
          variant="contained"
          onClick={handleClose}
          className="modal-button"
        >
          {buttonLabel}
        </Button>
      </Box>
    </Modal>
  );
}
