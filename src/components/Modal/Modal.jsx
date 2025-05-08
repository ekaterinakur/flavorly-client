import './Modal.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiModal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({ isOpen, children, onClose }) {
  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-box">
        <IconButton
          onClick={onClose}
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
      </Box>
    </MuiModal>
  );
}
