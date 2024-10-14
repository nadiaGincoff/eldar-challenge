import { Fragment } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

import CustomButton from './CustomButton';

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
          <CustomButton
            label={cancelButtonText}
            onClick={handleClose}
            variant="outlined"
            sx={{
              backgroundColor: 'transparent',  
              color: 'primary.main',
              borderColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'secondary.main',
              },
            }}
          /> 
          <CustomButton
            onClick={confirmButtonAction}
            label={confirmButtonText}
            sx={{ marginRight: 2,  backgroundColor: 'text.primary',
              '&:hover': {
                backgroundColor: 'primary.main',
              }, }}
          />
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}