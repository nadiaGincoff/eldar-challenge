import { Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomButton from '../../../components/CustomButton';

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
            backgroundColor: 'background.default'
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
        <DialogTitle sx={{ color: 'text.primary' }}>Crear publicación</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: 'text.secondary' }}>
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
            sx={{
              backgroundColor: 'background.default'
            }}
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
          <CustomButton
            label="Cancelar"
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
            label={isCreatingPost ? 'Publicando...' : 'Crear publicación'}
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: 'text.primary',
              '&:hover': {
                backgroundColor: 'primary.main',
              },
            }}
          />
           
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}