import { useState } from "react";
import {
  Box,
  Typography,
  Skeleton,
  Divider,
} from '@mui/material';
import {
  Add as AddIcon,
} from '@mui/icons-material';

import { getAllUsernames } from "../../../services/userService";
import PostCard from "../../../components/PostCard";

import FormDialog from "./FormDialog";
import MultipleSelect from "../../../components/MultipleSelect";
import { useDeletePost, usePosts, useCreatePost } from "../../../hooks/usePosts";
import { useAuth } from "../../../contexts/useAuth";
import { PostFormData } from "../../../types/postTypes";
import CustomButton from "../../../components/CustomButton";

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
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'secondary.main' }}>
      <Box
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginY: 5,
        }}
      >
        <Typography 
          color="text.secondary" 
          sx={{ 
            xs: { fontSize: '10px' }, 
            sm: { fontSize: '15px' }, 
            md: { fontSize: '20px' }
          }}
        >
          Aqui podras visualizar y crear publicaciones
        </Typography>
        <CustomButton
          variant="contained"
          startIcon={<AddIcon />}
          label="Crear publicación"
          onClick={() => setIsCreatingPost(true)}
        />
      </Box>
      <MultipleSelect names={names} label="Selecciona un usuario" />
      <Divider sx={{ my: 2 }} />
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

