import { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ 
  open, 
  handleClose, 
  onFormSubmit,
  isCreatingPost,
}: { 
  open: boolean, 
  handleClose: () => void, 
  onFormSubmit: (title: string, description: string) => void,
  isCreatingPost: boolean
}) {
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          },
        }}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            onFormSubmit(formJson.title, formJson.description); 
            handleClose();
          },
        }}
      >
        <DialogTitle>Crear publicación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor, ingrese el título y el contenido de la publicación.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Título"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Contenido"
            type="text"
            fullWidth
            variant="standard"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
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
            Cancelar
          </Button>
          <Button 
            type="submit"
            variant="contained"
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
            {isCreatingPost ? 'Publicando...' : 'Crear publicación'}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}