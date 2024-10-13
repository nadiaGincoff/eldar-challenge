import { Fragment } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

interface AlertDialogProps {
  title: string;
  description: string;
  cancelButtonText: string;
  confirmButtonText: string;
  open: boolean;
  handleClose: () => void;
  confirmButtonAction: () => void;
}

export default function AlertDialog({ title, description, cancelButtonText, confirmButtonText, open, handleClose, confirmButtonAction }: AlertDialogProps) {
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent sx={{ padding: '16px' }}>
          <DialogContentText id="alert-dialog-description" sx={{ fontSize: '1rem', color: '#555' }}>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: '16px', justifyContent: 'flex-end' }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              textTransform: 'none',
              padding: '8px 15px',
              fontSize: '15px',
              borderRadius: '8px',
              color: '#587da7',
              borderColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#587da7',
                color: 'white',
              },
            }}
          >
            {cancelButtonText}
          </Button>
          <Button
            onClick={confirmButtonAction}
            variant="contained"
            autoFocus
            sx={{
              textTransform: 'none',
              padding: '8px 15px',
              fontSize: '15px',
              borderRadius: '8px',
              backgroundColor: '#5982b1',
              '&:hover': {
                backgroundColor: '#587da7',
              },
            }}
          >
            {confirmButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}