import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Skeleton,
  Divider,
} from '@mui/material';
import {
  Add as AddIcon,
} from '@mui/icons-material';

import { getAllUsernames } from "../../../services/userService";
import PostCard from "../../../components/PostCard";

import FormDialog from "../../../components/FormDialog";
import MultipleSelect from "../../../components/MultipleSelect";
import { useDeletePost, usePosts, useCreatePost } from "../../../hooks/usePosts";
import { useAuth } from "../../../contexts/useAuth";
import { PostFormData } from "../../../types/postTypes";

const Posts = () => {
  const { user } = useAuth()
  const { posts, isLoading, error } = usePosts()
  const [isCreatingPost, setIsCreatingPost] = useState(false)
  const {
    mutate: deletePost,
    isPending: isDeleting,
  } = useDeletePost();

  const {
    mutate: createPost,
    isPending: isCreating,
  } = useCreatePost();

  const [names, setNames] = useState<string[]>([])

  const handleDeletePost = (postId: number) => {
    deletePost(postId)
  }

  const handleCreatePost = (title: string, description: string) => {
    if (!user?.id) {
      console.error("User ID is required");
      return;
    }

    const newPost: PostFormData = {
      userId: user?.id,
      title,
      body: description,
    }

    createPost(newPost)
  }

  if (error) return <div>Error:{error.message}</div>

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, width: '100%' }}>
      <Box
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2 
        }}
      >
        <Typography variant="h4" component="h1">
          Publicaciones
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
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
          onClick={() => setIsCreatingPost(true)}
        >
          Nueva publicación
        </Button>
      </Box>
      <MultipleSelect names={names} label="Selecciona un usuario" />
      {isLoading ? (
        <Skeleton variant="rectangular" height={118} />
      ) : (
        <Box sx={{ width: '100%' }}>
          {posts?.map((post) => (
            <Box key={post.id}>
              <PostCard 
                post={post} 
                handleDeletePost={() => handleDeletePost(post.id)}
              />
              <Divider sx={{ my: 2 }} />
            </Box>
          ))}
        </Box>
      )}
      <FormDialog 
        open={isCreatingPost} 
        handleClose={() => setIsCreatingPost(false)} 
        onFormSubmit={handleCreatePost}
        isCreatingPost={isCreating}
      />
    </Box>
  )
}

export default Posts;

