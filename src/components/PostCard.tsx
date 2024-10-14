import { useState } from 'react';

import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Skeleton,
  TextField,
} from '@mui/material';

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Comment as CommentIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

import AlertDialog from './AlertDialog';

import { Post } from '../types/postTypes';
import { useUserById } from '../hooks/useUsers';
import { useAuth } from '../contexts/useAuth';
import { useCommentsByPostId, useUpdatePost } from '../hooks/usePosts';
import { capitalizeFirstLetter } from '../lib/utils';

const PostCard = ({ post, handleDeletePost }: { post: Post; handleDeletePost?: (postId: number) => void }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPost, setUpdatedPost] = useState<Post>(post);
  const { data, error, isFetching } = useUserById(post.userId);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSavingDialogOpen, setIsSavingDialogOpen] = useState(false);
  const { isAdmin } = useAuth();

  const {
    mutate: updatePost,
    isPending: isUpdating,
    isSuccess: isUpdateSuccess,
    error: updateError
  } = useUpdatePost();

  const {
    data: commentsData,
    error: commentsError,
    isFetching: commentsIsFetching
  } = useCommentsByPostId(post.id)

  const handleEditPost = () => {
    if (isEditing) {
      setIsSavingDialogOpen(true);
    } else {
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedPost(post);
  }

  const handleConfirmDeletePost = (postId: number) => {
    if (handleDeletePost) {
      handleDeletePost(postId)
    }
    setIsDialogOpen(false)
  }

  const handleConfirmEditPost = () => {
    updatePost({ postId: post.id, postData: updatedPost });
    setIsSavingDialogOpen(false);
    setIsEditing(false);
  }
 
 return (
    <Card 
      elevation={0} 
      sx={{ 
        width: '100%', 
        backgroundColor: 'background.default',
      }} 
      key={post.id}
    >
      {isFetching || commentsIsFetching ? (
        <Skeleton variant="rectangular" height={118} />
      ) : error || commentsError ? (
        <Typography variant="body1" color="error">Error al cargar los datos</Typography>
      ) : (
        <>
          <CardContent component="div" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="subtitle2" component="p" sx={{ mb: 1, color: 'text.secondary' }}>
              {data?.name}
            </Typography>
            {
              isEditing ? (
                <>
                  <TextField
                    label="Título"
                    value={updatedPost.title}
                    onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
                    fullWidth
                  />
                  <TextField
                    label="Contenido"
                    value={updatedPost.body}
                    onChange={(e) => setUpdatedPost({ ...updatedPost, body: e.target.value })}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ mt: 2 }}
                  />
                </>
              ) : (
                <>
                  <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                    {capitalizeFirstLetter(updatedPost.title)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {capitalizeFirstLetter(updatedPost.body)}
                  </Typography>
                  {updateError ? (
                    <Typography variant="body1" color="error">
                      Error al actualizar, intente nuevamente
                    </Typography>
                  ) : null}
                </>
              )
            }
          </CardContent>
          <CardActions>
            <Button size="small" startIcon={<CommentIcon />} sx={{ color: 'text.secondary' }}>
              {commentsData?.length}
            </Button>
            {
              isAdmin ? (
                <>
                  <Button
                    size="small"
                    startIcon={<EditIcon />}
                    sx={{ color: 'text.secondary' }}
                    onClick={handleEditPost}
                  >
                    {isEditing ? 'Guardar' : 'Editar'}
                  </Button>
                  {!isEditing ? (
                    <>
                      <Button
                        size="small"
                        startIcon={<DeleteIcon />}
                        onClick={() => setIsDialogOpen(true)}
                        sx={{ color: 'text.secondary' }}
                      >
                        Borrar
                      </Button>
                    </>
                  ) : null}
                  {isEditing ? (
                    <>
                      <Button
                        size="small"
                        startIcon={<CancelIcon />}
                        onClick={handleCancelEdit}
                        sx={{ color: 'text.secondary' }}
                      >
                        Cancelar
                      </Button>
                    </>
                  ) : null}
                </>
              ) : null
            }
          </CardActions>
          <AlertDialog
            title="Guardar publicación"
            description="¿Desea guardar los cambios?"
            cancelButtonText="Cancelar"
            confirmButtonText="Guardar"
            handleClose={() => setIsSavingDialogOpen(false)}
            confirmButtonAction={handleConfirmEditPost}
            open={isSavingDialogOpen}
          />
          <AlertDialog
            title="Eliminar publicación"
            description="¿Estás seguro de querer eliminar esta publicación?"
            cancelButtonText="Cancelar"
            confirmButtonText="Borrar"
            handleClose={() => setIsDialogOpen(false)}
            confirmButtonAction={() => handleConfirmDeletePost(updatedPost.id)}
            open={isDialogOpen}
          />
        </>
      )}
    </Card>
  )
}

export default PostCard;